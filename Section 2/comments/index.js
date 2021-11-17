const express = require("express");
require("dotenv").config();
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const app = express();
const port = process.env.REACT_APP_PORT || 8081;
app.use(bodyParser.json());
app.use(cors());

const commentsByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post("/posts/:id/comments", (req, res) => {
  const commentId = randomBytes(4).toString("hex");
  const { content } = req.body;

  const comments = commentsByPostId[req.params.id] || [];

  comments.push({ id: commentId, content });

  const eventBusTrigger = async (data) => {
    try {
      await axios.post(`${process.env.REACT_APP_EVENT_BUS_LINK}/events`, data);
    } catch (err) {
      console.log(err);
    }
  };

  eventBusTrigger({
    type: "CommentCreated",
    data: { id: commentId, content, postId: req.params.id },
  });

  commentsByPostId[req.params.id] = comments;

  res.status(201).send(comments);
});

app.post("/events", (req, res) => {
  console.log("Received Event: ", req.body.type);

  res.send({});
});

app.listen(port, () => {
  console.log(`Listen and serve at http://localhost:${port}`);
});
