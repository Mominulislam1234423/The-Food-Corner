import SharedCover from "../../Componants/SharedCover/SharedCover";
import ContactImg from "../../../assets/contact/banner.jpg";
import SectionTitle from "../../Componants/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";
import ContactFrom from "./ContactFrom/ContactFrom";
import ContactUs from "./ContactUs/ContactUs";

export default function Contact() {
  return (
    <div>
      <Helmet>
        <title>Contact US | Food Corner</title>
      </Helmet>
      <SharedCover
        title="Would you like to try a dish?"
        name="CONTACT US"
        img={ContactImg}
      ></SharedCover>
      <section>
        <SectionTitle
          subHeading={"Visit Us"}
          heading={"OUR LOCATION"}
        ></SectionTitle>
        <ContactUs />
      </section>

      <section>
        <SectionTitle
          subHeading={"Send Us a Message"}
          heading={"CONTACT FORM"}
        ></SectionTitle>
        <ContactFrom />
      </section>
    </div>
  );
}
