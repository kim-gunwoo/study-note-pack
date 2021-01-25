"use strict";

const { init } = require("./server.js");
const { getConfig } = require("./lib/config");
const env = process.env.NODE_ENV;

const main = async () => {
  const config = await getConfig();

  const server = await init();
  server.listen(config.port, () => {
    console.log(`Server listening on port  ${config.port}`);
  });

  process.on("SIGTERM", () => server.shotdown());
  process.on("SIGINT", () => server.shotdown());
};
