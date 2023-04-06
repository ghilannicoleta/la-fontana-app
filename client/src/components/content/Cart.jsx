import CartEmpty from "./CartEmpty";
import CartContext from "./CartContent";

export default function Cart() {
  const cartElementsArr = [1];

  return (
    <div className="text-1xl mx-auto mt-10 w-4/5 bg-bgSlate p-5 py-16 font-bold text-stone">
      {cartElementsArr.length ? <CartContext /> : <CartEmpty />}
    </div>
  );
}
