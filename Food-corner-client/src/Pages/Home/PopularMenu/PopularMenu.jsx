import { useEffect, useState } from "react";
import SectionTitle from "../../../Componants/SectionTitle/SectionTitle";
import MenuItem from "../../../Componants/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

export default function PopularMenu() {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItems = data.filter((item) => item.category === "popular");
  //       setMenu(popularItems);
  //     });
  // }, []);
  return (
    <section className="w-5/6 mx-auto">
      <SectionTitle
        heading={"POPULAR MENU"}
        subHeading={"Check it out"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-4 my-8">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </section>
  );
}
