import { menu_list } from "../../public/frontend_assets/assets";
import PropTypes from 'prop-types';

function ExploreMenu({ category, setCategory }) {
  return (
    <div className="my-6 space-y-6 w-full sm:w-[80%] lg:w-[76%] mx-auto font-outfit px-4 sm:px-0">
      {/* Header Section */}
      <h1 className="text-3xl sm:text-4xl font-bold text-start">
        Explore Our Menu
      </h1>
      <p className="text-start text-sm sm:text-md text-gray-600">
        Choose from a diverse menu featuring a delectable array of dishes crafted
        with the finest ingredients and culinary expertise. Our mission is to satisfy
        your cravings and elevate your dining experience, one delicious meal at
        a time.
      </p>

      {/* Menu Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:flex lg:flex-row lg:justify-between lg:items-center p-2">
        {menu_list.map((item, index) => (
          <div
            onClick={() => setCategory(prev => prev === item.menu_name ? 'All' : item.menu_name)}
            key={index}
            className="rounded-lg overflow-hidden group cursor-pointer text-center"
          >
            {/* Menu Image */}
            <img
              className={
                category === item.menu_name
                  ? "border-[4px] border-[#E77917] rounded-full p-1 h-[100px] sm:h-[110px] mx-auto sm:w-[130px] "
                  : "h-[100px] sm:h-[120px] p-1 mx-auto object-contain transform group-hover:scale-105 transition duration-300"
              }
              src={item.menu_image}
              alt={item.menu_name}
            />

            {/* Menu Name */}
            <div className="p-2">
              <h2 className="text-sm sm:text-md font-semibold text-gray-600 -mt-2">
                {item.menu_name}
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <hr className="mx-auto h-[2px] bg-[#e2e2e2] mt-4" />
    </div>
  );
}

ExploreMenu.propTypes = {
  category: PropTypes.string.isRequired, // category is a string
  setCategory: PropTypes.func.isRequired, // setCategory is a function
};

export default ExploreMenu;




