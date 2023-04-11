import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import UserService from "./services/UserService.js";
import initDb from "./database.js";

dotenv.config();
const app = express();
app.use(bodyParser.json());
const port = 3002;
initDb();

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
