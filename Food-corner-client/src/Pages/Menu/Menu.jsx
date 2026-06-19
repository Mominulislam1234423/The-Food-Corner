import SectionTitle from "../../Componants/SectionTitle/SectionTitle";
import SharedCover from "../../Componants/SharedCover/SharedCover";
import useMenu from "../../hooks/useMenu";
import MenuCategory from "./MenuCategory/MenuCategory";
import MenuCover from "./MenuCover/MenuCover";
import { Helmet } from "react-helmet-async";
import desserts from "../../../assets/menu/dessert-bg.jpeg";
import pizzaBanner from "../../../assets/menu/pizza-bg.jpg";
import saladimg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";

export default function Menu() {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Our Menu | Food Corner</title>
      </Helmet>
      <MenuCover />
      <SectionTitle
        subHeading={"Don't miss"}
        heading={"TODAY'S OFFER"}
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>

      <SharedCover
        name={"DESSERTS"}
        title={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        img={desserts}
      ></SharedCover>
      <MenuCategory items={dessert}></MenuCategory>

      <SharedCover
        name={"PIZZA"}
        title={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        img={pizzaBanner}
      ></SharedCover>
      <MenuCategory items={pizza}></MenuCategory>

      <SharedCover
        name={"SALADS"}
        title={
          " Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        img={saladimg}
      ></SharedCover>
      <MenuCategory items={salad}></MenuCategory>

      <SharedCover
        name={"SOUPS"}
        title={
          " Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        img={soupImg}
      ></SharedCover>
      <MenuCategory items={soup}></MenuCategory>
    </div>
  );
}
