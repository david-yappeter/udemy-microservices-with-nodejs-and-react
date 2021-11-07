const express = require("express");
require("dotenv").config();
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors());

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

  const eventBusTrigger = async (data) => {
    try {
      await axios.post(
        `http://localhost:${process.env.REACT_APP_EVENT_BUS_PORT}/events`,
        data
      );
    } catch (err) {
      console.log(err);
    }
  };

  eventBusTrigger({ type: "PostCreated", data: { id, title } });

  res.send(posts[id]);
});

app.post("/events", (req, res) => {
  console.log("Received Event: ", req.body.type);

  res.send({});
});

app.listen(port, () => {
  console.log(`Listen and Serve at http://${port}`);
});
