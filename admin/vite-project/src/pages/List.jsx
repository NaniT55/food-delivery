import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function List({url}) {
  
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error fetching data");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  const removeFood = async(foodId) =>{
    const response = await axios.post(`${url}/api/food/remove`, {id:foodId})
    await fetchList();
    if(response.data.success){
        toast.success(response.data.message)
    }else{
        toast.error("Error")
    }
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen font-outfit">
      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-800 mb-6">All Foods List</h1>

      {/* Table */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-5 bg-[#FF4C24] text-white font-semibold py-4 px-6">
          <span className="text-center">Image</span>
          <span className="text-center">Name</span>
          <span className="text-center">Category</span>
          <span className="text-center">Price</span>
          <span className="text-center">Action</span>
        </div>

        {/* Table Body */}
        {list.length > 0 ? (
          list.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-5 items-center py-4 px-6 border-b border-gray-200 hover:bg-gray-100 transition duration-150"
            >
              {/* Image */}
              <div className="flex justify-center">
                <img
                  src={`${url}/images/${item.image}`}
                  alt={item.name}
                  className="w-14 h-14 object-cover rounded-md"
                />
              </div>

              {/* Name */}
              <p className="text-gray-700 text-center font-medium">{item.name}</p>

              {/* Category */}
              <p className="text-gray-600 text-center italic">{item.category}</p>

              {/* Price */}
              <p className="text-gray-900 text-center font-bold">${item.price}</p>

              {/* Action */}
              <button
                className="text-[#FF4C24] hover:text-[#E0431F] font-medium hover:underline"
                onClick={() => {removeFood(item._id)}}
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-gray-500 italic">
            No items found.
          </div>
        )}
      </div>
    </div>
  );
}

export default List;


