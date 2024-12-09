import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Add from "./pages/Add";
import Orders from "./pages/Orders";
import List from "./pages/List";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const url = "http://localhost:4000";
  return (
    <div>
      <ToastContainer />
      {/* Navbar */}
      <Navbar />
      <hr className="border-b-1 border-gray-600"/>

      {/* Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Page Content */}
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/add" element={<Add url={url}/>} />
            <Route path="/list" element={<List url={url}/>} />
            <Route path="/orders" element={<Orders url={url}/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

