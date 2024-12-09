import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate =useNavigate()
  const { cartItems, food_list, clearCart, updateCart, removeItemFromCart, subtotal, url } =
    useContext(StoreContext);

  // Check if the cart is empty
  const isEmpty = Object.values(cartItems).every((qty) => qty === 0);

  // Proceed to Checkout Functionality
  const handleCheckout = () => {
    if (subtotal === 0) {
      alert("Your cart is empty!");
      return;
    }
    // Redirect to checkout page or initiate checkout process
    navigate('/order')
  };

  return (
    <div className="container mx-auto p-6 w-[80%] font-outfit">
      <h1 className="text-3xl font-bold text-center mb-6">Your Cart</h1>

      {/* Cart Items Section */}
      {isEmpty ? (
        <div className="text-center">
          <p className="text-xl">Your cart is empty!</p>
        </div>
      ) : (
        <>
          {/* Table Header */}
          <div className="grid grid-cols-6 gap-4 font-bold text-center mb-4">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <hr className="mb-4" />

          {/* Cart Items */}
          {food_list.map((item) => {
            if (cartItems[item._id] > 0) {
              return (
                <div key={item._id}>
                  <div className="grid grid-cols-6 gap-4 items-center text-center mb-4">
                    {/* Item Image */}
                    <img
                      src={url + "/images/" + item.image}
                      alt={item.name}
                      className="w-12 h-12 object-cover mx-auto"
                    />

                    {/* Item Name */}
                    <p>{item.name}</p>

                    {/* Item Price */}
                    <p>${item.price.toFixed(2)}</p>

                    {/* Quantity Management */}
                    <div className="flex items-center justify-center space-x-2">
                      <button
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                        onClick={() =>
                          updateCart(item._id, cartItems[item._id] - 1)
                        } // Decrease quantity
                      >
                        -
                      </button>
                      <p>{cartItems[item._id]}</p>
                      <button
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                        onClick={() =>
                          updateCart(item._id, cartItems[item._id] + 1)
                        } // Increase quantity
                      >
                        +
                      </button>
                    </div>

                    {/* Total Price */}
                    <p>${(item.price * cartItems[item._id]).toFixed(2)}</p>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeItemFromCart(item._id)} // Remove item from cart
                      className="text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                  </div>

                  {/* Add hr after each item */}
                  <hr className="my-4" />
                </div>
              );
            }

            return null;
          })}

          {/* Subtotal Section */}
          <div className="flex justify-between mt-6 space-x-6 p-6 border border-gray-200 rounded-lg bg-gray-50 shadow-sm">
            {/* Bill Section (Left Side) */}
            <div className="space-y-4 sm:w-[50%]">
              <div className="flex flex-row justify-between">
                <p className="font-medium text-gray-800">Subtotal:</p>
                <p className="font-semibold text-[#E77917]">
                  ${subtotal.toFixed(2)}
                </p>
              </div>
              <div className="flex flex-row justify-between">
                <p className="font-medium text-gray-800">Delivery Fee:</p>
                <p className="font-semibold text-[#E77917]">
                  ${(subtotal * 0.04).toFixed(2)}
                </p>
              </div>
              <div className="flex flex-row justify-between">
                <p className="font-medium text-gray-800">Tax Amount:</p>
                <p className="font-semibold text-[#E77917]">
                  ${(subtotal * 0.02).toFixed(2)}
                </p>
              </div>
              <div className="flex flex-row justify-between border-t pt-4">
                <p className="font-bold text-lg text-gray-900">Grand Total:</p>
                <p className="font-semibold text-xl text-[#E77917]">
                  ${(subtotal + subtotal * 0.04 + subtotal * 0.02).toFixed(2)}
                </p>
              </div>
            </div>

            {/* Promo Code Section (Right Side) */}
            <div className="flex flex-col items-start ">
              <div className="p-4 border border-gray-200 rounded-md bg-white shadow-sm ">
                <p className="text-sm font-medium text-gray-800">
                  Have a promo code?
                </p>
                <div className="flex items-center space-x-2 mt-2">
                  <input
                    type="text"
                    placeholder="Enter promo code"
                    className="w-full px-3 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E77917]"
                  />
                  <button className="px-3 py-1 text-sm bg-[#E77917] text-white rounded-md hover:bg-orange-600 transition">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons Section */}
          <div className="flex justify-end space-x-4 mt-6">
            <button
              onClick={clearCart} // Clear all items from the cart
              className="px-6 py-2 text-red-500 border border-red-500 rounded-md hover:bg-red-500 hover:text-white transition duration-300"
            >
              Clear Cart
            </button>
            <button
              onClick={handleCheckout} // Proceed to Checkout
              className="px-6 py-2 bg-[#E77917] text-white rounded-md hover:bg-orange-600 transition duration-300"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
