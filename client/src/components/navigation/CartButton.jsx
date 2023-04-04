import {FaShoppingCart } from "react-icons/fa";

export default function CartButton() {
  return (
    <button
      type="button"
      className="italic transition  hover:text-colorYellow hover:delay-100"
    >
      <FaShoppingCart />
    </button>
  );
}
