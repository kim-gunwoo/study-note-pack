/*
npm 모듈
redis

*/
const redis = require("redis");
const client = redis.createClient();

client.on("connect", () => {
  console.log(`connected`);
});

client.set("backend", "node", (err, res) => {
  console.log(res);
});

client.set("frontend", "js");
client.expire("frontend", 20);

client.get("backend", (err, res) => {
  console.log(res);
});

client.del("frontend", (err, res) => {
  if (err) {
    console.log(err);
  }
  console.log(res);
});

client.set("frontend", 1, () => {
  // Increment
  client.incr("frontend", (err, res) => {
    if (err) {
      console.log(err);
    }
    console.log(res);
  });
});

client.set("full", 2, () => {
  // Decrement
  client.decr("full", (err, res) => {
    if (err) {
      console.log(err);
    }
    console.log(res);
  });
});
