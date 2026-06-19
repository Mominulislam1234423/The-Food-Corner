import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import AuthContext from "../../Firebase/AuthContext/AuthContext";
import { FaShoppingCart } from "react-icons/fa";
import useCort from "../../hooks/useCort";

export default function Navbar() {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [cart] = useCort();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("Successfully Logged Out");
        navigate("/login");
      })
      .catch((error) => {
        console.error("Logout Error:", error.message);
      });
  };

  const navOptions = (
    <>
      <li>
        <NavLink to="/">HOME</NavLink>
      </li>
      <li>
        <NavLink to="/menu">OUR MENU</NavLink>
      </li>
      <li>
        <NavLink to="/order">OUR SHOP</NavLink>
      </li>
      <li>
        <NavLink to="/contact">CONTACT US</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/addMenu">ADD MENU</NavLink>
        </li>
      )}
      <li>
        <Link to="/dashBoard/cart">
          <button className="btn btn-sm">
            <FaShoppingCart />
            <div className="badge badge-sm badge-secondary">+{cart.length}</div>
          </button>
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-black text-white max-w-7xl mx-auto fixed z-10 bg-opacity-30">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-black rounded-lg z-1 mt-3 w-52 p-2 shadow"
          >
            {navOptions}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost md:text-xl">
          THE FOOD CORNER
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <div className="flex items-center gap-3">
            {user?.displayName && (
              <span className="text-sm mr-2 invisible md:visible">
                {user.displayName}
              </span>
            )}

            <button
              onClick={handleLogOut}
              className="btn btn-sm md:btn-md btn-outline btn-warning"
            >
              LogOut
            </button>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link to="/login">
              <button className="btn btn-sm md:btn-md btn-outline btn-warning">
                Login
              </button>
            </Link>
            <Link to="/signUp">
              <button className="btn btn-sm md:btn-md btn-outline btn-warning">
                SignUp
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
