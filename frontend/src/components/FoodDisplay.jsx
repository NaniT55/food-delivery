import { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
import FoodItem from './FoodItem';
import PropTypes from 'prop-types';

function FoodDisplay({ category }) {
  const { food_list } = useContext(StoreContext); // Destructuring context value

  // Filter food items based on the selected category
  const filteredFoodList = category === 'All'
    ? food_list
    : food_list.filter(item => item.category === category);

  // Check if filtered food_list is available
  if (filteredFoodList.length === 0) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800">
          No dishes available in this category.
        </h2>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6 font-outfit">
      <h2 className="text-2xl font-bold text-gray-800 text-start mx-auto sm:w-[76%]">
        Top Dishes Near You
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:w-[76%] mx-auto">
        {filteredFoodList.map((item) => (
          <FoodItem
            id={item._id}
            name={item.name}
            price={item.price}
            description={item.description}
            image={item.image}
            key={item._id}
          />
        ))}
      </div>
    </div>
  );
}
FoodDisplay.propTypes = {
    category: PropTypes.string.isRequired, 
  };

export default FoodDisplay;
