import { Outlet } from "react-router-dom";
import Footer from "./shared/Footer/Footer";
import Navbar from "./shared/Navber/Navbar";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-441px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default App;
