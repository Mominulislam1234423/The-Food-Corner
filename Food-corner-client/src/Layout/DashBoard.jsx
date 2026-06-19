import { NavLink, Outlet } from "react-router";
import {
  FaAd,
  FaCalendar,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
} from "react-icons/fa";

export default function DashBoard() {
  return (
    <div className="flex min-h-screen">
      <div className="w-64 min-h-full bg-orange-400">
        <ul className="menu">
          <li>
            <NavLink to="/dashBoard/userHome">
              <FaHome />
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashBoard/reservation">
              <FaCalendar />
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashBoard/cart">
              <FaShoppingCart />
              My Cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashBoard/addAreview">
              <FaAd />
              Add a Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashBoard/myBookings">
              <FaList />
              My Bookings
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <FaSearch />
              Menu
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
}
