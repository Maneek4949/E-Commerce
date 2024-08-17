import { Fragment } from "react";
import ShopList from "../components/ShopList";
import { products } from "../utils/products.jsx";
import SliderHome from "../components/Slider.jsx";

const Home = () => { 
  return (
    <Fragment>
      <SliderHome/>
      <ShopList productItems={products}/>
    </Fragment>
  );
};

export default Home;
