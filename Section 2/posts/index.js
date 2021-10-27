const express = require("express");
require("dotenv").config();
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;
  posts[id] = {
    id,
    title,
  };

  res.send(posts[id]);
});

app.listen(port, () => {
  console.log(`Listen and Serve at http://${port}`);
});
