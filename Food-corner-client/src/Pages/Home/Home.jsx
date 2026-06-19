import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Carts from "./Carts/Carts";
import PopularMenu from "./PopularMenu/PopularMenu";
import ReadMenu from "./ReadMenu/ReadMenu";
import Testimonials from "./Testimonials/Testimonials";
import Catagory from "./catagories/catagory";
import ChefService from "./chefService/chefService";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Home | Food Corner</title>
      </Helmet>
      <Banner />
      <Catagory />
      <ChefService />
      <PopularMenu />
      <Carts />
      <ReadMenu />
      <Testimonials />
    </div>
  );
}
