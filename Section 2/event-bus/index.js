const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
const port = process.env.REACT_APP_PORT || 8084;
app.use(bodyParser.json());

app.post("/events", (req, res) => {
  console.log("Received Event ", req.body);
  const event = req.body;

  const eventBusSend = async () => {
    try {
      axios.post(`${process.env.REACT_APP_POST_LINK}/events`, event);
    } catch (err) {
      console.log(err);
    }

    try {
      await axios.post(`${process.env.REACT_APP_COMMENT_LINK}/events`, event);
    } catch (err) {
      console.log(err);
    }

    try {
      axios.post(`${process.env.REACT_APP_QUERY_LINK}/events`, event);
    } catch (err) {
      console.log(err);
    }
  };

  eventBusSend();

  res.send({ status: "OK" });
});

app.listen(port, () => {
  console.log(`Listen and serve at http://localhost:${port}`);
});
