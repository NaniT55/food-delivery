import { useContext, useState } from 'react';
import { StoreContext } from '../context/StoreContext';

function PlaceOrder() {
  const { cartItems, subtotal } = useContext(StoreContext);
  const safeSubtotal = subtotal || 0;

  const [deliveryInfo, setDeliveryInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    pinCode: '',
    country: '',
    phone: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeliveryInfo({
      ...deliveryInfo,
      [name]: value,
    });
  };

  const validateForm = () => {
    let errors = {};
    Object.keys(deliveryInfo).forEach((field) => {
      if (!deliveryInfo[field]) {
        errors[field] = `${field} is required`;
      }
    });
    setFormErrors(errors);
    return Object.keys(errors).length === 0; // Returns true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Handle order placement (e.g., call API, show success message, etc.)
      console.log('Order submitted', deliveryInfo, cartItems);
      // Reset form or handle next steps
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-10 w-[80%] mx-auto mt-5 p-5 font-outfit">
      {/* Form Section */}
      <div className="w-1/2 space-y-4">
        <p className="text-lg font-semibold">Delivery Information</p>
        
        {/* First Name and Last Name in a row */}
        <div className="flex space-x-4">
          <div className="w-1/2">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={deliveryInfo.firstName}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-md w-full"
            />
            {formErrors.firstName && <p className="text-red-500 text-sm">{formErrors.firstName}</p>}
          </div>
          <div className="w-1/2">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={deliveryInfo.lastName}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-md w-full"
            />
            {formErrors.lastName && <p className="text-red-500 text-sm">{formErrors.lastName}</p>}
          </div>
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={deliveryInfo.email}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md w-full"
          />
          {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
        </div>

        {/* Street Address */}
        <div>
          <input
            type="text"
            name="street"
            placeholder="Street"
            value={deliveryInfo.street}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md w-full"
          />
          {formErrors.street && <p className="text-red-500 text-sm">{formErrors.street}</p>}
        </div>

        {/* City and State in a row */}
        <div className="flex space-x-4">
          <div className="w-1/2">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={deliveryInfo.city}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-md w-full"
            />
            {formErrors.city && <p className="text-red-500 text-sm">{formErrors.city}</p>}
          </div>
          <div className="w-1/2">
            <input
              type="text"
              name="state"
              placeholder="State"
              value={deliveryInfo.state}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-md w-full"
            />
            {formErrors.state && <p className="text-red-500 text-sm">{formErrors.state}</p>}
          </div>
        </div>

        {/* Pin Code and Country in a row */}
        <div className="flex space-x-4">
          <div className="w-1/2">
            <input
              type="text"
              name="pinCode"
              placeholder="Pin Code"
              value={deliveryInfo.pinCode}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-md w-full"
            />
            {formErrors.pinCode && <p className="text-red-500 text-sm">{formErrors.pinCode}</p>}
          </div>
          <div className="w-1/2">
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={deliveryInfo.country}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-md w-full"
            />
            {formErrors.country && <p className="text-red-500 text-sm">{formErrors.country}</p>}
          </div>
        </div>

        {/* Phone Number */}
        <div>
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={deliveryInfo.phone}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md w-full"
          />
          {formErrors.phone && <p className="text-red-500 text-sm">{formErrors.phone}</p>}
        </div>
      </div>

      {/* Bill Section */}
      <div className="w-1/2 space-y-4">
        <p className="text-lg font-semibold">Bill Summary</p>
        <div className="space-y-4">
          <div className="flex justify-between">
            <p className="font-medium text-gray-800">Subtotal:</p>
            <p className="font-semibold text-[#E77917]">${safeSubtotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-medium text-gray-800">Delivery Fee:</p>
            <p className="font-semibold text-[#E77917]">${(safeSubtotal * 0.04).toFixed(2)}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-medium text-gray-800">Tax Amount:</p>
            <p className="font-semibold text-[#E77917]">${(safeSubtotal * 0.02).toFixed(2)}</p>
          </div>
          <div className="flex justify-between border-t pt-4">
            <p className="font-bold text-lg text-gray-900">Grand Total:</p>
            <p className="font-semibold text-xl text-[#E77917]">
              ${(safeSubtotal + safeSubtotal * 0.04 + safeSubtotal * 0.02).toFixed(2)}
            </p>
          </div>
        </div>
        <div className="flex justify-end space-x-4 mt-6 w-full">
        <button
          type="submit"
          className={`px-6 py-2 bg-[#E77917] text-white rounded-md hover:bg-orange-600 transition duration-300 ${isSubmitting ? 'cursor-not-allowed opacity-50' : ''}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Processing...' : 'Proceed to Payment'}
        </button>
      </div>
      </div>

      {/* Action Button */}
     
    </form>
  );
}

export default PlaceOrder;

