import LoginButton from "./LoginButton";
import CartButton from "./CartButton";
import Button from "./Button";
import logo from "../../assets/pizza.png";

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 flex justify-center space-x-24 bg-stone bg-opacity-80 p-9">
      <div className="w-36">
        <img alt="Logo" src={logo} />
      </div>
      <Button title="Menu" />
      <Button title="Shop" />
      <Button title="Restaurants" />
      <Button title="Delivery" />
      <Button title="Contacts" />
      <LoginButton />
      <CartButton />
    </nav>
  );
}
