

function Header() {
  return (
    <div
      className="relative bg-cover bg-center h-[80vh] sm:w-[76%] sm:m-2 sm:mx-auto sm:rounded-xl"
      style={{ backgroundImage: "url('../frontend_assets/header_img.png')" }}
    >
      <div className="absolute sm:bottom-[10%] sm:left-[2vw] l- z-10 flex flex-col justify-evenly items-start p-8 space-y-4 text-white font-outfit gap-3 max-w-[70%] animate-fadeIn">
        <h2 className="text-5xl font-bold ">Order your Favourite food here</h2>
        <p className="text-md font-semibold ">
          Choose from diverse menu featuring a delectable array of dishes
          crafted with finest ingredients and culinary expertise.Our mission is
          to satisfy your cravings and elevate your dining experience, one
          delicious meal at a time.{" "}
        </p>
        <button className="px-6 py-2 text-[#E77917] bg-white rounded-full font-medium cursor-pointer hover:bg-[#fff4f2] transition duration-300 ">
          View Menu
        </button>
      </div>
    </div>
  );
}

export default Header;
