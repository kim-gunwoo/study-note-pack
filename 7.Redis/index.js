"use strict";

const express = require("express");
const fetch = require("node-fetch");
const redis = require("redis");

const app = express();

const client = redis.createClient();

client.on("error", (err) => {
  console.error(`>> Error : ${err}`);
});

/*

URL :
https://jsonplaceholder.typicode.com/photos

*/
app.get("/cache", (req, res) => {
  const redisKey = "post:thumbnailUrl";

  return client.get(redisKey, (err, redis_res) => {
    if (err) {
      console.error(err);
    }

    if (redis_res) {
      // 캐시가 존재
      return res.json({ type: "cached", data: JSON.parse(redis_res) });
    } else {
      // 캐시가 존재하지 않을 경우
      fetch("https://jsonplaceholder.typicode.com/photos")
        .then((fetch_res) => fetch_res.json())
        .then((data) => {
          // set
          // set + expire
          client.setex(redisKey, 10, JSON.stringify(data));
          return res.json({ type: "onfly", data: data });
        })
        .catch((err) => console.log(`( ${err} )`));
    }
  });
});

app.listen({ port: 8000 }, () => {
  console.log(`Running Server`);
});
