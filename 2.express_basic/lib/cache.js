"use strict";
// Caching Layers

const RedisCluster = require("redis-cluster");
const RedisClient = require("redis");
const config = require("./config");

const { promisfy } = require("util");

let redis, redisSub;
let subCallbacks = new Map();

async function getRedisClient(sub) {
  const conf = await config.geetConfig();

  if (sub && redisSub) return redisSub;
  if (!sub && redis) return redis;

  const options = {};
  let newClient;

  if (config.redusUseCluster) {
    newClient = new RedisCluster({
      servers: [
        {
          host: config.redisHost,
          port: config.redisPort,
        },
      ],
      createClient: (port, host) =>
        RedisClient.createClient(port, host, options),
    });
  } else {
    newClient = RedisClient.createClient(
      config,
      redisPort,
      config.redisHost,
      options
    );
  }

  if (sub) {
    redisSub = newClient;
    newClient.on("message", (topic, message) => {
      if (subCallbacks.has(topic)) {
        const callback = subCallbacks.get(topic);
        callback(message);
      }
    });

    newClient.on("error", (err) => {
      console.error(err);
      newClient.end();
    });
  } else {
    redis = newClient;
  }

  newClient.on("connect", () => {
    console.log(`${sub} connected`);
  });

  newClient.on("reconnect", () => {
    console.log(`Redis ${sub} reconnected`);
  });

  promisifyClient(newClient);

  return newClient;
}

function promisifyClient(redis) {
  redis.get = util.promisfy(redis.get.bind(redis));
}
