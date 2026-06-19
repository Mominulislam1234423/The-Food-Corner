import SharedCover from "../../Componants/SharedCover/SharedCover";
import banner from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../hooks/useMenu";
import OrderTab from "./OrderTab/OrderTab";
import { useParams } from "react-router";
import { Helmet } from "react-helmet-async";

export default function OrderFood() {
  // Category-র নামগুলো Data list এবং Tab-এর সিরিয়ালের সাথে মিল রাখা হয়েছে
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();

  // Jodi match na pay (-1 hoy), tahole default index 0 (salad) hobe
  const initialIndex = categories.indexOf(category);
  const validIndex = initialIndex !== -1 ? initialIndex : 0;

  const [tabIndex, setTabIndex] = useState(validIndex);
  const [menu] = useMenu();

  // Category filtering (Database-er namer sathe match rekhe)
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const dessert = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks"); // Offered thakle 'offered' dibe

  return (
    <div>
      <Helmet>
        <title>Our Shop | Food Corner</title>
      </Helmet>
      <SharedCover
        name={"OUR SHOP"}
        title={"Would you like to try a dish?"}
        img={banner}
      />
      <div>
        {/* selectedIndex use korle dynamic routing thikmoto kaj korbe */}
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drinks</Tab>
          </TabList>

          <TabPanel>
            <OrderTab items={salad} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={pizza} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={soup} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={dessert} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={drinks} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}
