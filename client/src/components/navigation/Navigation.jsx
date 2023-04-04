import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import CartButton from "./CartButton";
import Button from "./Button";
import logo from "../../assets/pizza.png";

export default function Navigation() {
  return (
    <div className="sticky top-0 z-50 flex w-full justify-center bg-stone bg-opacity-80">
      <nav className="flex w-5/6 justify-between space-x-2 py-9 text-lg">
        <div className="w-36">
          <Link to="/">
            <img alt="Logo" src={logo} />
          </Link>
        </div>
        <Button title="Menu" />
        <Button title="Shop" />
        <Button title="Restaurants" />
        <Button title="Delivery" />
        <Button title="Contacts" />
        <LoginButton />
        <CartButton />
      </nav>
    </div>
  );
}
