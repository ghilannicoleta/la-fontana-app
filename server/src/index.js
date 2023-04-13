import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import UserService from "./services/UserService.js";
import initDb from "./database.js";
import CartService from "./services/cartService.js";
import cors from "cors";
import ProductService from "./services/productService.js";

dotenv.config();
const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 3003;
initDb();

const corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/login", async (req, res) => {
  console.log(`app.post /login ${JSON.stringify(req.body)}`);
  const user = new UserService();
  user.login(req.body);
  res.send("BUNA ZIUA");
});

app.post("/user", async (req, res) => {
  const user = new UserService();

  console.log(req.body);
  await user.addUser(req.body);
  res.send("ok");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.post("/api/cart", async (req, res) => {
  const cart = new CartService();
  const saveItem = await cart.addToCart(req.body);
  res
    .header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    )
    .send(saveItem);
});

app.get("/api/products", async (req, res) => {
  const productService = new ProductService();
  const products = await productService.getAllProducts();
  res
    .header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    )
    .send(products);
});
