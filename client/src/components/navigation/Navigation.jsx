import LoginButton from "./LoginButton";
import CartButton from "./CartButton";

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 flex justify-center space-x-24 bg-stone-900 bg-opacity-75 p-16 text-white">
      <button
        type="button"
        className="... italic delay-150 hover:text-yellow-300"
      >
        Menu
      </button>
      <button
        type="button"
        className="... italic delay-150 hover:text-yellow-300"
      >
        Shop
      </button>
      <button
        type="button"
        className="... italic delay-150 hover:text-yellow-300"
      >
        Restaurants
      </button>
      <button
        type="button"
        className="... italic delay-150 hover:text-yellow-300"
      >
        Delivery
      </button>
      <button
        type="button"
        className="... italic delay-150 hover:text-yellow-300"
      >
        Contacts
      </button>
      <LoginButton />
      <CartButton />
    </nav>
  );
}
