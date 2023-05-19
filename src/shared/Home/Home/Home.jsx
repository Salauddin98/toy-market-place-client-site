import { useNavigation } from "react-router-dom";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Gallery from "../Gallary/Gallery";
import TrendingProduct from "../TrendingProduct/TrendingProduct";
import Loading from "../../../Loading/Loading";

const Home = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <About></About>
      <TrendingProduct></TrendingProduct>
    </div>
  );
};

export default Home;
