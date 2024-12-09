import { useNavigate, useLocation } from "react-router-dom";
import { assets } from "../assets/assets";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Function to check if the route is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className="sm:w-64 w-20 h-screen bg-gray-100 text-gray-700 flex flex-col font-outfit">
      <div className="flex flex-col p-4 space-y-6 sm:ml-[50px]">
        {/* Add Items */}
        <div
          className={`flex items-center space-x-4 cursor-pointer p-2 rounded-md border-b-2 cursor-pointer ${
            isActive('/add') ? 'bg-gray-300 text-[#FF4C24] font-semibold cursor-pointer' : 'hover:bg-gray-300'
          }`}
          onClick={() => navigate('/add')}
        >
          <img src={assets.add_icon} alt="add_icon" className="w-6 h-6 " />
          <p className="text-lg font-medium hidden sm:block cursor-pointer">Add Items</p>
        </div>

        {/* List Items */}
        <div
          className={`flex items-center space-x-4 cursor-pointer p-2 rounded-md border-b-2 cursor-pointer ${
            isActive('/list') ? 'bg-gray-300 text-[#FF4C24] font-semibold cursor-pointer' : 'hover:bg-gray-300'
          }`}
          onClick={() => navigate('/list')}
        >
          <img src={assets.order_icon} alt="list_icon" className="w-6 h-6" />
          <p className="text-lg font-medium hidden sm:block cursor-pointer">List Items</p>
        </div>

        {/* Orders */}
        <div
          className={`flex items-center space-x-4 cursor-pointer p-2 rounded-md border-b-2 cursor-pointer ${
            isActive('/orders') ? 'bg-gray-300 text-[#FF4C24] font-semibold cursor-pointer' : 'hover:bg-gray-300'
          }`}
          onClick={() => navigate('/orders')}
        >
          <img src={assets.order_icon} alt="order_icon" className="w-6 h-6" />
          <p className="text-lg font-medium hidden sm:block cursor-pointer">Orders</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;


