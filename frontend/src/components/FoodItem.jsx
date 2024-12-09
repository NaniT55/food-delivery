import PropTypes from 'prop-types';
import { assets } from '../../public/frontend_assets/assets';
import { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';

function FoodItem({ id, name, price, description = 'No description available', image }) {
  const { cartItems, addToCart, removeFromCart,url } = useContext(StoreContext); // Destructured context value

  return (
    <div className="border rounded-lg p-4 flex flex-col items-start space-y-2 shadow-md bg-white">
      {/* Image Section */}
      <div className="relative w-full h-36 overflow-hidden rounded-lg">
        <img
          src={url+"/images/"+image}
          alt={`Food item ${id}`}
          className="object-cover w-full h-full transform transition-transform duration-300 hover:scale-105"
        />

        {/* Conditional Add/Remove Buttons */}
        <div className="absolute bottom-2 right-2 flex items-center space-x-2 bg-white bg-opacity-92 rounded-full px-2 py-1">
          {!cartItems[id] ? (
            <img
              src={assets.add_icon_white}
              alt="Add Item"
              className="cursor-pointer w-8 h-8"
              onClick={() => addToCart(id)}
            />
          ) : (
            <div className="flex items-center space-x-2">
              <img
                src={assets.remove_icon_red}
                alt="Remove Item"
                className="cursor-pointer w-6 h-6"
                onClick={() => removeFromCart(id)}
              />
              <p className="text-sm font-medium">{cartItems[id]}</p>
              <img
                src={assets.add_icon_green}
                alt="Add More Item"
                className="cursor-pointer w-6 h-6"
                onClick={() => addToCart(id)}
              />
            </div>
          )}
        </div>
      </div>

      {/* Name and Rating */}
      <div className="flex flex-row items-center w-full justify-between">
        <p className="text-lg font-semibold text-gray-800">{name}</p>
        <img
          src={assets.rating_starts}
          alt="Rating stars"
          className="w-20"
        />
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 text-start">{description}</p>

      {/* Price */}
      <p className="text-lg font-bold text-start text-gray-800">${price}</p>
    </div>
  );
}

FoodItem.propTypes = {
  id: PropTypes.string.isRequired, // Assuming id is a string
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string, // Optional description
  image: PropTypes.string.isRequired,
};

// FoodItem.defaultProps = {
//   description: 'No description available', // Default description if none is provided
// };

export default FoodItem;
