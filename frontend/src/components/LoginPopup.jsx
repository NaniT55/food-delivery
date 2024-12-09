import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { assets } from "../../public/frontend_assets/assets";
import { StoreContext } from "../context/StoreContext";
import axios from "axios";

function LoginPopup({ setShowLogin }) {
  const { url, setToken, setUser } = useContext(StoreContext); // Added setUser
  const [currState, setCurrState] = useState("Sign Up");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Handle input field changes
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission for login/signup
  const onSubmit = async (event) => {
    event.preventDefault();
    let endpoint = currState === "Login" ? "/api/user/login" : "/api/user/register";

    try {
      const response = await axios.post(`${url}${endpoint}`, data);

      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);

        // Fetch and update user data after successful login/signup
        const userResponse = await axios.get(`${url}/api/user/profile`, {
          headers: { Authorization: `Bearer ${response.data.token}` },
        });

        if (userResponse.data.success) {
          setUser(userResponse.data.user); // Update the user state
        }

        alert("Success! You are logged in.");
        setShowLogin(false);
      } else {
        alert(response.data.message || "An error occurred.");
      }
    } catch (error) {
      console.error("API Error:", error);
      alert("An error occurred while processing your request. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      {/* Popup Form */}
      <form onSubmit={onSubmit} className="bg-white w-[90%] sm:w-[350px] p-6 rounded-lg shadow-lg">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="Close"
            className="cursor-pointer w-5 h-5"
          />
        </div>

        {/* Input Fields */}
        <div className="space-y-4">
          {currState === "Sign Up" && (
            <input
              type="text"
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
            />
          )}
          <input
            type="email"
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
          />
          <input
            type="password"
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            placeholder="Password"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full mt-6 px-4 py-2 bg-[#E77917] text-white rounded-lg font-semibold hover:bg-orange-600 transition duration-300"
        >
          {currState === "Sign Up" ? "Create Account" : "Login"}
        </button>

        {/* Terms and Conditions */}
        {currState === "Sign Up" && (
          <div className="flex items-center mt-4 space-x-2">
            <input type="checkbox" required className="h-4 w-4 -mt-4" />
            <p className="text-sm text-gray-600">
              By continuing, I agree to the{" "}
              <span className="text-[#E77917] cursor-pointer underline">terms of use</span> &{" "}
              <span className="text-[#E77917] cursor-pointer underline">privacy policy</span>.
            </p>
          </div>
        )}

        {/* Toggle Between Login and Signup */}
        <p className="mt-4 text-sm text-center text-gray-600">
          {currState === "Sign Up" ? (
            <>
              Already have an account?{" "}
              <span
                onClick={() => {
                  setCurrState("Login");
                  setData({ email: "", password: "" }); // Reset data for Login
                }}
                className="text-[#E77917] cursor-pointer font-medium hover:underline"
              >
                Sign in here
              </span>
            </>
          ) : (
            <>
              Create a new account?{" "}
              <span
                onClick={() => {
                  setCurrState("Sign Up");
                  setData({ name: "", email: "", password: "" }); // Reset data for Sign Up
                }}
                className="text-[#E77917] cursor-pointer font-medium hover:underline"
              >
                Click here
              </span>
            </>
          )}
        </p>
      </form>
    </div>
  );
}

LoginPopup.propTypes = {
  setShowLogin: PropTypes.func.isRequired,
};

export default LoginPopup;
