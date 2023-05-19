import About from "../About/About";
import Banner from "../Banner/Banner";
import Gallery from "../Gallary/Gallery";
import TrendingProduct from "../TrendingProduct/TrendingProduct";

const Home = () => {
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
