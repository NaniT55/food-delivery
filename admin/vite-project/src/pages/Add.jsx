import { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

function Add({url}) {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);
    const response = await axios.post(`${url}/api/food/add`, formData);
    if (response.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "Salad",
      });
      setImage(false)
      toast.success(response.data.message)
    }
    else{
        toast.error(response.data.message)
    }
  };

  return (
    <div className="flex justify-start items-center font-outfit">
      <form
        className=" rounded-lg p-3 w-full max-w-lg"
        onSubmit={onSubmitHandler}
      >
        {/* Upload Image */}
        <div className="mb-4">
          <p className="text-md font-medium text-gray-700 mb-2">Upload Image</p>
          <label
            htmlFor="image"
            className=" rounded-lg cursor-pointer flex items-center"
          >
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt="upload_area"
              className="h-[80px] w-[130px]"
            />
          </label>
          <input
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
            type="file"
            id="image"
            hidden
            required
          />
        </div>

        {/* Product Name */}
        <div className="mb-4">
          <p className="text-md font-medium text-gray-700 mb-2">Product Name</p>
          <input
            onChange={onChangeHandler}
            type="text"
            value={data.name}
            name="name"
            placeholder="Type here"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Product Description */}
        <div className="mb-2">
          <p className="text-md font-medium text-gray-700 mb-2">
            Product Description
          </p>
          <textarea
            onChange={onChangeHandler}
            name="description"
            value={data.description}
            rows="3"
            placeholder="Add description here..."
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-300"
          ></textarea>
        </div>

        {/* Product Category and Price */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {/* Product Category */}
          <div>
            <p className="text-md font-medium text-gray-700 mb-2">
              Product Category
            </p>
            <select
              onChange={onChangeHandler}
              name="category"
              className="w-full border border-gray-300 rounded-lg p-1 bg-white focus:outline-none focus:ring focus:ring-blue-300"
            >
              <option value="">Select Category</option>
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>

          {/* Product Price */}
          <div>
            <p className="text-md font-medium text-gray-700 mb-2">
              Product Price
            </p>
            <input
              onChange={onChangeHandler}
              type="number"
              value={data.price}
              name="price"
              placeholder="$20"
              className="w-full border border-gray-300 rounded-lg p-1 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-[100px] bg-black text-white text-md font-medium py-3 rounded-md hover:bg-gray-800 focus:outline-none focus:ring focus:ring-blue-300"
        >
          ADD
        </button>
      </form>
    </div>
  );
}

export default Add;
