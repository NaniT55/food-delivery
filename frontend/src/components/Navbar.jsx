import { useState, useContext } from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";
import { assets } from "../../public/frontend_assets/assets";

function Navbar({ setShowLogin }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling menu visibility
  const [activeMenu, setActiveMenu] = useState(""); // State for active menu item
  

  // Function to handle active menu item
  const handleMenuClick = (menuItem) => {
    setActiveMenu(menuItem);
    setIsMenuOpen(false); // Close the menu on mobile after clicking
  };


  const { cartItems, token, setToken, logout } = useContext(StoreContext);
  const cartItemsCount = Object.values(cartItems).reduce(
    (sum, qty) => sum + qty,
    0
  );

  return (
    <nav className="bg-white sticky z-50">
      <div className="container mx-auto flex items-center justify-evenly px-4 py-2 sm:flex-row font-outfit">
        {/* Logo Section */}
        <NavLink to="/" className="flex items-center">
          <img
            src="./logo.png"
            alt="logo"
            className="h-10 sm:h-12 cursor-pointer"
          />
        </NavLink>

        {/* Mobile Menu Toggle Button */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none p-2"
          >
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="sm:hidden bg-white shadow-md py-4 mt-2 rounded-md w-full absolute top-full left-0">
            <ul className="flex flex-col items-center space-y-4">
              <NavLink
                to="/"
                className="text-lg text-gray-800 font-medium hover:text-[#E77917] transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
              {["Menu", "Mobile App", "Contact us"].map((item) => (
                <li key={item}>
                  <Link
                    to={
                      item === "Menu"
                        ? "explore-menu"
                        : item === "Mobile App"
                        ? "app-download"
                        : "contact-details"
                    }
                    smooth={true}
                    duration={500}
                    className="text-lg text-gray-800 font-medium hover:text-[#E77917] transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
              {!token ? (
                <button
                  onClick={() => setShowLogin(true)}
                  className="px-6 py-2 text-[#E77917] bg-transparent border-2 border-[#E77917] rounded-full font-medium hover:bg-[#fff4f2] transition duration-300"
                >
                  Sign In
                </button>
              ) : (
                <button
                  onClick={logout}
                  className="px-6 py-2 text-red-500 bg-transparent border-2 border-red-500 rounded-full font-medium hover:bg-red-100 transition duration-300"
                >
                  Log Out
                </button>
              )}
            </ul>
          </div>
        )}
        <div>
        <ul className="flex space-x-8 text-gray-800 font-medium">
            <NavLink
              to="/"
              className={`cursor-pointer text-lg font-medium ${
                activeMenu === "home"
                  ? "underline text-[#E77917]"
                  : "text-gray-800 hover:text-[#E77917] transition"
              }`}
              onClick={() => handleMenuClick("home")}
            >
              Home
            </NavLink>

            {["Menu", "Mobile App", "Contact us"].map((item) => (
              <li key={item}>
                <Link
                  to={
                    item === "Menu"
                      ? "explore-menu"
                      : item === "Mobile App"
                      ? "app-download"
                      : item === "Contact us"
                      ? "contact-details"
                      : ""
                  }
                  smooth={true}
                  duration={500}
                  className={`cursor-pointer text-lg font-medium ${
                    activeMenu === item
                      ? "underline text-[#E77917]"
                      : "text-gray-800 hover:text-[#E77917] transition"
                  }`}
                  onClick={() => handleMenuClick(item)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Menu Section */}
        <div className="hidden sm:flex sm:items-center sm:space-x-4">
          

          <div className="flex items-center space-x-6">
            <img src="./search.png" alt="search-icon" className="h-6 w-6" />
            <div className="relative">
              <NavLink to="/cart">
                <img
                  src="./shopping-bag.png"
                  alt="cart-icon"
                  className="h-6 w-6 cursor-pointer"
                />
              </NavLink>
              {cartItemsCount > 0 && (
                <div className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">
                  {cartItemsCount}
                </div>
              )}
            </div>
            {!token ? (
              <button
                onClick={() => setShowLogin(true)}
                className="px-4 py-2 text-[#E77917] bg-transparent border-2 border-[#E77917] rounded-full text-lg font-medium cursor-pointer hover:bg-[#fff4f2] transition duration-300"
              >
                Sign in
              </button>
            ) : (
              <div className="relative group">
                <img
                  src={assets.profile_icon}
                  alt="profile_icon"
                  className="h-8 w-8 rounded-full cursor-pointer"
                />
                <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg w-32 top-10 right-0 text-gray-800 -mt-2">
                  <li className="flex items-center space-x-2 p-2 hover:bg-gray-100 cursor-pointer">
                    <img
                      src={assets.bag_icon}
                      alt="bag_icon"
                      className="h-4 w-4"
                    />
                    <p>Orders</p>
                  </li>
                  <hr />
                  <li
                    className="flex items-center space-x-2 p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={logout}
                  >
                    <img
                      src={assets.logout_icon}
                      alt="logout_icon"
                      className="h-4 w-4"
                    />
                    <p>Log Out</p>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
