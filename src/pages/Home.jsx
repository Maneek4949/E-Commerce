import { Fragment } from "react";
import Banner from "../components/Banner/Banner";
import ShopList from "../components/ShopList";
import bannerImg from "../Images/HomeBanner.jpg"
import { products } from "../utils/products.jsx";

const Home = () => { 
  return (
    <Fragment>
      <Banner title="Shop Now" productBg={bannerImg} />
      <ShopList productItems={products}/>
    </Fragment>
  );
};

export default Home;
