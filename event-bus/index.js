const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

const events = [];

app.post("/events", (req, res) => {
  const event = req.body;

  events.push(event);
  console.log(events);
  axios.post("http://localhost:4000/events", event); // Posts
  axios.post("http://localhost:4001/events", event); // Comments
  axios.post("http://localhost:4002/events", event); // Query
  axios.post("http://localhost:4003/events", event); // Moderation

  res.send({ status: "Ok" });
});

app.get("/events", (req, res) => {
  res.send(events);
});

app.listen(4005, () => {
  console.log("Listening on 4005");
});
