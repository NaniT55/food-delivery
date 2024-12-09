import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
// import { food_list } from "../../public/frontend_assets/assets";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const navigate =useNavigate()
  const [cartItems, setCartItems] = useState({});
  const [category, setCategory] = useState("All");
  const [food_list, setFoodList] =useState([])
  const [user, setUser] = useState(null); // State to store user details
  const [token, setToken] = useState(""); // Authentication token
  const url = "http://localhost:4000";

  // Function to add an item to the cart
  const addToCart = async (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      updatedCart[itemId] = updatedCart[itemId] ? updatedCart[itemId] + 1 : 1;
      return updatedCart;
    });
    if(token){
      await axios.post(url+"/api/cart/add", {itemId}, {headers: {token}})
    }
  };

  // Function to remove one item from the cart (decrease quantity)
  const removeFromCart = async (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[itemId] > 1) {
        updatedCart[itemId] -= 1;
      } else {
        delete updatedCart[itemId]; // Remove the item if quantity is 0
      }
      return updatedCart;
    });
    if(token){
      await axios.post(url+"/api/cart/remove", {itemId}, {headers: {token}})
    }
  };

  // Function to remove an item completely from the cart
  const removeItemFromCart = (id) => {
    setCartItems((prev) => {
      const updated = { ...prev };
      delete updated[id]; // Remove the item completely
      return updated;
    });
  };

  // Function to update the quantity of an item in the cart
  const updateCart = (id, quantity) => {
    setCartItems((prev) => {
      const updated = { ...prev };
      if (quantity <= 0) delete updated[id]; // If quantity is 0, remove the item
      else updated[id] = quantity;
      return updated;
    });
  };
  const loadCartData = async (token) => {
    const response = await axios.post(url+"/api/cart/get", {}, {headers:{token}})
    setCartItems(response.data.cartData)
  }
  // Recalculate the subtotal whenever cartItems or food_list change
  const subtotal = food_list.reduce((total, item) => {
    return total + (cartItems[item._id] || 0) * item.price;
  }, 0);

  // Clear all items from the cart
  const clearCart = () => setCartItems({});

  const fetchFoodList = async () => {
    const response = await axios.get(url+"/api/food/list");
    setFoodList(response.data.data)
  }

  // Log cartItems whenever they change
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  // Persist token in localStorage
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    
    async function loadData() {
      await fetchFoodList()
      if (storedToken) {
        setToken(storedToken);
        await loadCartData(localStorage.getItem("token"))
      }
    }
    loadData();
  }, []);

  // Function to fetch user data after login/signup
  // const fetchUserData = async (authToken) => {
  //   try {
  //     const response = await fetch(`${url}/api/user`, {
  //       headers: { Authorization: `Bearer ${authToken}` },
  //     });
  //     const userData = await response.json();
  //     if (userData.success) {
  //       setUser(userData.user); // Update user state
  //     } else {
  //       console.error("Failed to fetch user data.");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching user data:", error);
  //   }
  // };

  // Logout functionality
  const logout = () => {
    setToken("");
    setUser(null);
    localStorage.removeItem("token");
    navigate('/')
  };

  // Context value to be provided to the components
  const contextValue = {
    food_list,
    setFoodList,
    cartItems,
    addToCart,
    removeFromCart,
    removeItemFromCart,
    category,
    setCategory,
    updateCart,
    clearCart,
    subtotal,
    url,
    token,
    setToken,
    user, // Expose user state
    setUser, // Allow components to update user state
    logout, // Provide logout functionality
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

StoreContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StoreContextProvider;
