import CartItem from "./CartItem";

export default function CartContext() {
  const productsOrder = [
    {
      src: "https://andys.md/public/menu/thumbs/version_150x100x1/fae8714cda041044bbeeee22fb1e9fe6.jpg",
      title: "Pizza Margherita",
      description:
        "Pizza with ripe tomatoes sauce, fresh basil and mozzarella cheese.",
      price: "95",
    },
    {
      src: "https://andys.md/public/menu/thumbs/version_150x100x1/fae8714cda041044bbeeee22fb1e9fe6.jpg",
      title: "Pizza Margherita",
      description:
        "Pizza with ripe tomatoes sauce, fresh basil and mozzarella cheese.",
      price: "95",
    },
  ];

  return (
    <div>
      <h1 className="px-4 pb-12 text-3xl"> 1 Items in your cart</h1>
      <div className="grid grid-cols-2 ">
        <div className="pl-20 text-xl">
          <div>Product(s)</div>
        </div>
        <div className="grid grid-cols-3 justify-items-center text-xl">
          <div className="">Price</div>
          <div className="">Qty</div>
          <div className="">Total:</div>
        </div>
      </div>
      {productsOrder.map((produs) => (
        <CartItem produs={produs} />
      ))}
      <div className="text-1xl grid grid-cols-2 justify-items-center rounded-md border py-3">
        <div>
          <div>Subtotal</div>
          <div>Total</div>
          <div>Delivery</div>
        </div>
        <div>
          <div>110 $</div>
          <div>40 $</div>
          <div>110 $</div>
        </div>
      </div>
      <div className="flex justify-center pt-10">
        <button
          type="button"
          className="w-72 rounded-md bg-bgRed py-3 text-center text-xl text-bgSlate"
        >
          Order
        </button>
      </div>
    </div>
  );
}
