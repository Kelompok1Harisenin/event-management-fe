import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { FaBars, FaSearch } from "react-icons/fa";
import Cookies from "js-cookie";
import { authHelpers } from "../../utils";
import { logoutUser } from "../../redux/slices/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = authHelpers.isAuthenticated();
  const [isPressed, setIsPressed] = useState(false);

  // User data
  const user = isLoggedIn ? authHelpers.getUserFromCookies() : null;

  const handleClick = () => {
    setIsPressed((prevState) => !prevState);
  };

  const handleLogout = async () => {
    const refreshToken = JSON.parse(Cookies.get("refreshToken"));
    await dispatch(logoutUser(refreshToken));

    Cookies.remove("user");
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
    navigate("/");
  };

  return (
    <header className="fixed top-0 left-0 w-full z-[1000] bg-white shadow-md md:p-1">
      <nav className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5">
        {/* Icon */}
        <NavLink to="/">
          <img
            src="/images/riserLogo.png"
            alt="logo"
            className="h-12 md:h-16"
          />
        </NavLink>

        {/* Search Bar */}
        <form className="hidden h-9 w-1/3 items-center rounded-md md:flex">
          <input
            className="w-5/6 bg-gray-200 rounded-lg h-10 font-medium px-4"
            type="search"
            placeholder="Search"
          />

          <button
            type="submit"
            className="h-10 rounded-full ml-3 px-5 hover:bg-gray-300 text-center transition duration-300 ease-in-out"
          >
            <FaSearch />
          </button>
        </form>

        {/* Mobile Burger */}
        <button
          className="md:hidden py-2 px-6  text-black hover:bg-gray-300"
          onClick={() => handleClick("bars")}
        >
          <FaBars />
        </button>

        {/* Header Navigation List */}
        <div className="hidden md:flex">
          <ul
            id="list-event"
            className={`hidden md:flex gap-3 max-md:${
              isPressed ? "block" : "hidden"
            } max-md:w-60 max-md:grid-rows-1 max-md:bg-white max-md:right-0`}
          >
            {/* Organize */}
            <li className="col-span-1 text-center py-6 px-4 w-24 hover:bg-gray-300 transition duration-300 ease-in-out">
              <div className="dropdown dropdown-hover">
                <label tabIndex={0} className="cursor-pointer">
                  Organize
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link to="/create-event">Create Event</Link>
                  </li>
                  <li>
                    <Link>Pricing</Link>
                  </li>
                  <li>
                    <Link>Resource</Link>
                  </li>
                  <li>
                    <Link>Contact Sales</Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* Help */}
            <li className="col-span-1 text-center py-6 px-4 w-24 hover:bg-gray-300 transition duration-300 ease-in-out">
              <div className="dropdown dropdown-hover">
                <label tabIndex={0} className="cursor-pointer">
                  Help
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link>Find Your Ticket</Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* Create Event */}
            <li className="col-span-1 text-center text-green-600 py-6 px-4 w-30 hover:bg-green-500 hover:text-white transition duration-300 ease-in-out">
              <NavLink to="/create-event">Create Event</NavLink>
            </li>

            {/* Account */}
            {user ? (
              <li
                id="user"
                className="col-span-2 text-center py-6 px-4 w-30 bg-white hover:bg-gray-300 transition duration-300 ease-in-out"
              >
                <div className="dropdown dropdown-hover">
                  <label tabIndex={0} className="cursor-pointer">
                    {user?.name}
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <Link onClick={handleLogout}>Logout</Link>
                    </li>
                  </ul>
                </div>
              </li>
            ) : (
              <>
                <li
                  id="Login"
                  className={`col-span-1 text-center py-6 px-2 w-20 hover:bg-gray-300 transition duration-300 ease-in-out ${
                    isLoggedIn ? "hidden" : "block"
                  }`}
                >
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li
                  id="Register"
                  className={`col-span-1 text-center py-6 px-2 w-20 hover:bg-gray-300 transition duration-300 ease-in-out ${
                    isLoggedIn ? "hidden" : "block"
                  }`}
                >
                  <NavLink to="/register">Register</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
