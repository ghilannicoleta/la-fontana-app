import LoginButton from "./LoginButton";
import CartButton from "./CartButton";
import Button from "./Button";

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 flex justify-center space-x-24 bg-stone-900 bg-opacity-75 p-16 text-white">
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
