import { useState } from "react";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import CartButton from "./CartButton";
import Button from "./Button";
import logo from "../../assets/pizza.png";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sticky top-0 z-50 bg-stone bg-opacity-80">
      <nav className="flex justify-between items-center px-4 py-3 md:px-8 md:py-4">
        <div className="w-16 lg:w-32 ml-9">
          <Link to="/">
            <img alt="Logo" src={logo} />
          </Link>
        </div>
        <div className="md:hidden">
          <button
            type="button"
            className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19 7H5V5h14v2zm0 6H5v-2h14v2zm0 6H5v-2h14v2z"
                  fill="#fff"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                  fill="#fff"
                />
              )}
            </svg>
          </button>
        </div>
        <ul
          className="hidden md:flex md:justify-between md:w-6/12"
        >
          <li>
            <Button title="Menu" />
          </li>
          <li>
            <Button title="Shop" />
          </li>
          <li>
            <Button title="Restaurants" />
          </li>
          <li>
            <Button title="Delivery" />
          </li>
          <li>
            <Button title="Contacts" />
          </li>
        </ul>
        <div className="block space-x-4 mr-16">
          <LoginButton/>
          <CartButton/>
        </div>
      </nav>
      <ul
          className={`${
            isOpen ? "flex" : "hidden"
          } md:hidden flex-col`}
        >
          <li>
            <Button title="Menu" />
          </li>
          <li>
            <Button title="Shop" />
          </li>
          <li>
            <Button title="Restaurants" />
          </li>
          <li>
            <Button title="Delivery" />
          </li>
          <li>
            <Button title="Contacts" />
          </li>
        </ul>
    </div>
  );
}

         

