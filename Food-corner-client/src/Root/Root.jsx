import { Outlet } from "react-router";
import Footer from "../Componants/Footer/Footer";
import Navbar from "../Componants/Navbar/Navbar";

export default function Root() {
  return (
    <div>
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
