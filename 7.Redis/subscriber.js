const express = require("express");
const redis = require("redis");

const subscriber = redis.createClient();

subscriber.on("message", (channel, message) => {
  console.log(`Received data : ${message}`);
});

subscriber.subscribe("subscriber-notify");

const app = express();

let count = 0;

// 구독
app.get("/", (req, res) => {
  res.send(`Subscriber ${++count}`);
});

app.listen({ port: 9000 }, () => {
  console.log(`Running Server `);
});
