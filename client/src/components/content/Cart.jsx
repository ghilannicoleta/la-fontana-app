import CartEmpty from "./CartEmpty";
import CartContent from "./CartContent";
import { useContentContext } from "../../context/CartContext";

export default function Cart() {
  const { selectedProducts, setSelectedProducts } = useContentContext();

  const removeFromCart = (item) => {
    const currentCartProducts = [...selectedProducts];
    const productIndex = currentCartProducts.findIndex(
      (el) => el.productData.title === item.title
    );
    currentCartProducts.splice(productIndex, 1);
    setSelectedProducts(currentCartProducts);
  };

  return (
    <div className="text-1xl mx-auto mt-10 w-4/5 bg-bgSlate p-5 py-16 font-bold text-stone">
      {selectedProducts.length ? (
        <CartContent
          cartItems={selectedProducts}
          removeFromCart={removeFromCart}
        />
      ) : (
        <CartEmpty />
      )}
    </div>
  );
}
