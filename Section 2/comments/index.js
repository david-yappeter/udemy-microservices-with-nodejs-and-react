const express = require("express");
require("dotenv").config();
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3001;
app.use(bodyParser.json());

const commentsByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post("/posts/:id/comments", (req, res) => {
  const commentId = randomBytes(4).toString("hex");
  const { content } = req.body;

  const comments = commentsByPostId[req.params.id] || [];

  comments.push({ id: commentId, content });

  commentsByPostId[req.params.id] = comments;

  res.status(201).send(comments);
});

app.listen(port, () => {
  console.log(`Listen and serve at http://localhost:${port}`);
});
