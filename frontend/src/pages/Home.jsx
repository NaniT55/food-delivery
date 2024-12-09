import { useState, useEffect } from 'react'
import { Element } from "react-scroll";
import Header from '../components/Header'
import ExploreMenu from '../components/ExploreMenu'
import FoodDisplay from '../components/FoodDisplay';
import AppDownload from '../components/AppDownload';
import Footer from '../components/Footer';
import { FaArrowAltCircleUp } from "react-icons/fa";

function Home() {
  const [category, setCategory] = useState("All");
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  return (
    <div>
      <Header />
      <Element name="explore-menu"><ExploreMenu  category={category} setCategory={setCategory} /></Element>
      <Element name="food-display"><FoodDisplay  category={category} /></Element>
      <Element name="app-download"><AppDownload /></Element>
      {/* <Element name="contact-details">
        <Footer />
      </Element> */}
      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-[#E77917] text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition duration-300"
        >
          <FaArrowAltCircleUp size={30} />
        </button>
      )}
      
    </div>
  )
}

export default Home
