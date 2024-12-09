import { assets } from '../../public/frontend_assets/assets'; // Assuming assets is correctly exported

function AppDownload() {
  return (
    <div className="bg-gradient-to-t from-white to-gray-100 text-gray-800 py-6 font-outfit mt-5">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <p className="text-xl font-semibold mb-4">
          For a Better Experience, Download the <br />
          <span className="text-4xl font-bold text-[#E77917]">Tomato App</span>
        </p>

        {/* App Store and Play Store Links */}
        <div className="flex justify-center space-x-4 mt-4">
          <img
            src={assets.play_store}
            alt="Play Store"
            className="h-[50px] object-contain cursor-pointer hover:scale-105 transition-transform"
          />
          <img
            src={assets.app_store}
            alt="App Store"
            className="h-[50px] object-contain cursor-pointer hover:scale-105 transition-transform"
          />
        </div>
      </div>
    </div>
  );
}

export default AppDownload;

