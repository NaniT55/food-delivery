import { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";
import LoginPopup from "./components/LoginPopup";
import Footer from "./components/Footer";
import StoreContextProvider from "./context/StoreContext"; // Import StoreContextProvider

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <StoreContextProvider> {/* Wrap the app with StoreContextProvider */}
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
      </Routes>
      <Footer />
    </StoreContextProvider>
  );
}

export default App;



