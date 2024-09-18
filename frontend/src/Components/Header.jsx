import { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import SearchCityContext from "../utils/context/SearchCityContext";
import { useSelector } from "react-redux";
import { logoURL } from "../utils/constants";

export const Header = () => {
  const cartItem = useSelector((store) => store.cart.items);
  const [city, setCity] = useState('');
  const { handleCityNameUpdate } = useContext(SearchCityContext);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-between p-4">
      <Link to="/" className="w-72 flex items-center">
        <img
          src={logoURL}
          alt="Company Logo"
          className="w-20 rounded-full transform scale-125" // Apply zoom with scale transform
        />
      </Link>

        <button
          className="lg:hidden p-2 text-gray-500"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">HI</span>
        </button>
        <div className="hidden lg:flex lg:items-center lg:space-x-4 ">
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
          <ul className="flex space-x-4">
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
                  `nav-link ${isActive ? "text-red-500 border-b-2 border-red-500" : "text-gray-500"}`
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
          </ul>
          <button className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Sign In/Sign Up
          </button>
          <Link to="/cart" className="relative text-2xl ml-4">
            🛒
            <span id="cart-size" className="absolute top-0 right-0 block w-4 h-4 text-xs font-semibold text-white bg-green-500 rounded-full transform translate-x-1/2 -translate-y-1/2">
              {cartItem.length}
            </span>
          </Link>
        </div>
      </div>
      <div className="lg:hidden collapse" id="navbarSupportedContent">
        <div className="p-4">
          <div className="flex flex-col space-y-2">
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
            <ul className="space-y-2">
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
                    `nav-link ${isActive ? "text-red-500 border-b-2 border-red-500" : "text-gray-500"}`
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
            </ul>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Sign In/Sign Up
            </button>
            <Link to="/cart" className="relative text-2xl">
              🛒
              <span
                className="absolute top-0 right-0 flex items-center text-center justify-center w-10 h-10 text-xs font-semibold text-white bg-green-500  transform translate-x-1/2 -translate-y-1/2"
              >
                {cartItem.length}
              </span>
            </Link>

          </div>
        </div>
      </div>
    </nav>
  );
};
