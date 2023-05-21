import { useNavigation } from "react-router-dom";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Gallery from "../Gallary/Gallery";
import TrendingProduct from "../TrendingProduct/TrendingProduct";
import Loading from "../../../Loading/Loading";
import ToysCategory from "../ToysCategory/ToysCategory";
import useTitle from "../../../Hooks/useTitle";
import Team from "../Team/Team";

const Home = () => {
  useTitle("Home");
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <ToysCategory></ToysCategory>
      <About></About>
      <TrendingProduct></TrendingProduct>
      <Team></Team>
    </div>
  );
};

export default Home;
