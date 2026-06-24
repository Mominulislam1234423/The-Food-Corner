import { NavLink, Outlet } from "react-router";
import {
  FaAd,
  FaBook,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import useCort from "../hooks/useCort";

export default function DashBoard() {
  const [cart] = useCort();

  // todo: get isadmin value from the data base
  const isAdmin = true;
  return (
    <div className="flex min-h-screen">
      <div className="w-64 min-h-full bg-orange-400">
        <ul className="menu">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashBoard/adminHome">
                  <FaHome />
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashBoard/addItems">
                  <FaUtensils />
                  AddItems
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashBoard/manageItems">
                  <FaList />
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashBoard/bookings">
                  <FaBook />
                  Manage BooKings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashBoard/allUsers">
                  <FaUsers />
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
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
            </>
          )}
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
          <li>
            <NavLink to="/contact">
              <FaEnvelope />
              Contact
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
