import { useContext, useState } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import SearchCityContext from "../utils/context/SearchCityContext";
import { useSelector } from "react-redux";
import { logoURL } from "../utils/constants";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";

export const Header = () => {
  const { user, isAuthenticated } = useAuth0();
  const cartItem = useSelector((store) => store.cart.items);
  const [city, setCity] = useState('');
  const { handleCityNameUpdate } = useContext(SearchCityContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/profile");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 overflow-hidden">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link to="/" className="w-72 flex items-center ">
          <img
            src={logoURL}
            alt="Company Logo"
            className="ms-5 w-20 rounded-full transform scale-[2]"
          />
        </Link>

        {/* Hamburger Menu Button for Mobile */}
        <button
          className="lg:hidden p-2 text-gray-500"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:items-center lg:space-x-4">
          {/* Search Bar */}
          <div className="flex items-center">
            <input
              type="text"
              className="form-input border rounded-md p-2"
              placeholder="Search city"
              onChange={(e) => setCity(e.target.value)}
            />
            <button
              className="ml-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
              type="button"
              onClick={() => handleCityNameUpdate(city)}
            >
              Search
            </button>
          </div>

          {/* Navbar Links */}
          <ul className="flex space-x-4 items-center">
            <li>
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "text-red-500 border-b-2 border-red-500" : "text-gray-500"}`
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "text-red-500 border-b-2 border-red-500" : "text-gray-500"}`
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "text-red-500 border-b-2 border-red-500" : "text-gray-500"} whitespace-nowrap flex-shrink-0`
                }
                to="/contact"
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "text-red-500 border-b-2 border-red-500" : "text-gray-500"}`
                }
                to="/grocery"
              >
                Grocery
              </NavLink>
            </li>
            {/* Cart */}
            <li>
              <Link to="/cart" className="relative text-2xl ml-4">
                🛒
                <span id="cart-size" className="absolute top-0 right-0 block w-4 h-4 text-xs font-semibold text-white bg-green-500 rounded-full transform translate-x-1/2 -translate-y-1/2">
                  {cartItem.length}
                </span>
              </Link>
            </li>

            {/* Auth and Profile */}
            <li>
              {!isAuthenticated ? (
                <LoginButton />
              ) : (
                <img
                  onClick={handleProfileClick}
                  className="mx-8 w-12 hover:cursor-pointer rounded-full"
                  src={user.picture}
                  alt={user.name}
                />
              )}
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden w-40 border absolute right-2 z-20 bg-white rounded-md">
          <div className="p-4">
            <div className="flex flex-col space-y-2">
              {/* Search Bar */}
              <input
                type="text"
                className="form-input border rounded-md p-2"
                placeholder="Search city"
                onChange={(e) => setCity(e.target.value)}
              />
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                type="button"
                onClick={() => handleCityNameUpdate(city)}
              >
                Search
              </button>

              {/* Mobile Navbar Links */}
              <ul className="space-y-2">
                <li className=" ">
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "text-red-500 " : "text-black "}`
                    }
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className=" ">
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "text-red-500" : "text-black"}`
                    }
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>
                <li className=" ">
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "text-red-500" : "text-black"}`
                    }
                    to="/contact"
                  >
                    Contact Us
                  </NavLink>
                </li>
                <li className=" ">
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "text-red-500" : "text-black"}`
                    }
                    to="/grocery"
                  >
                    Grocery
                  </NavLink>
                </li>
              </ul>

              {/* Cart for Mobile */}
              <Link to="/cart" className="relative text-2xl  pb-1">
                🛒
                <span className="absolute  right-0 flex items-center justify-center w-6 text-xs font-semibold text-black bg-green-500 rounded-full transform -translate-y-6">
                  {cartItem.length}
                </span>
              </Link>

              {/* Profile for Mobile */}
              <div className="flex  items-center justify-between mt-4">
                {!isAuthenticated ? (
                  <LoginButton />
                ) : (
                  <div className="flex justify-between w-[100%] items-center space-x-2 hover:cursor-pointer mb-2">
                    <img
                      onClick={handleProfileClick}
                      className="w-[40px] h-10 rounded-full hover:cursor-pointer"
                      src={user.picture}
                      alt={user.name}
                    />
                    <span className="text-black">{user.name}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
