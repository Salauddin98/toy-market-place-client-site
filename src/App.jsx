import { Outlet } from "react-router-dom";
import Footer from "./shared/Footer/Footer";
import Navbar from "./shared/Navber/Navbar";
import { useContext } from "react";
import { AuthContext } from "./Providers/AuthProviders";
import Loading from "./Loading/Loading";

const App = () => {
  const { loading } = useContext(AuthContext);
  // const navigation = useNavigation();
  // if (navigation.state === "loading") {
  //   return <Loading></Loading>;
  // }
  return (
    <>
      {loading ? (
        <Loading></Loading>
      ) : (
        <>
          <Navbar></Navbar>
          <div className="min-h-[calc(100vh-441px)]">
            <Outlet></Outlet>
          </div>
          <Footer></Footer>
        </>
      )}
    </>
  );
};

export default App;
