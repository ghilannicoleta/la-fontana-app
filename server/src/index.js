import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
const port = 3002;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
