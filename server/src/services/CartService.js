import Cart from "../models/cart.js";

export default class CartService {
  async addToCart(item) {
    try {
      const cart = await Cart.findOneAndUpdate(
        {
          "productData.title": item.title,
        },
        {
          $inc: { productCount: 1 },
        }
      );
      if (!cart) {
        const productToAdd = {
          productCount: 1,
          productData: {
            ...item,
          },
        };

        const newCartItem = new Cart(productToAdd);

        newCartItem
          .save()
          .then(() => console.log("ok"))
          .catch((error) => console.log(error));
        return newCartItem;
      }
      return cart;
    } catch (error) {
      console.log(error);
      throw new Error(`Error adding cart: ${error.message}`);
    }
  }
}
