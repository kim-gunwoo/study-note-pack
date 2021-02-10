const express = require("express");
const redis = require("redis");

const publisher = redis.createClient();

const app = express();

// 발행
app.get("/", (req, res) => {
  const data = {
    full: "node",
  };
  publisher.publish("subscriber-notify", JSON.stringify(data));
  res.send("Publisher sent an event via Redis");
});

app.listen({ port: 8000 }, () => {
  console.log(`Running Server `);
});
