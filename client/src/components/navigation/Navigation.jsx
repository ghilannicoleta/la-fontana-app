export default function Navigation() {
  return (
    <nav className="flex space-x-24 p-16 justify-center bg-stone-900 bg-opacity-75 sticky top-0 z-50 text-white">
      <button
        type="button"
        className="italic ... hover:text-yellow-300 delay-150"
      >
        Menu
      </button>
      <button
        type="button"
        className="italic ... hover:text-yellow-300 delay-150"
      >
        Shop
      </button>
      <button
        type="button"
        className="italic ... hover:text-yellow-300 delay-150"
      >
        Restaurants
      </button>
      <button
        type="button"
        className="italic ... hover:text-yellow-300 delay-150"
      >
        Delivery
      </button>
      <button
        type="button"
        className="italic ... hover:text-yellow-300 delay-150"
      >
        Contacts
      </button>
      <button
        type="button"
        className="italic ... hover:text-yellow-300 delay-150"
      >
        Login
      </button>
      <button
        type="button"
        className="italic ... hover:text-yellow-300 delay-150"
      >
        Cart
      </button>
    </nav>
  );
}
