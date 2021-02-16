"use strict";

const { createServer } = require("./server");

async function main(config) {
  const server = await createServer(config);
  const port = config.port || 8000;
  server.listen(port, () => {
    console.log(`Running at port ${port}`);
  });
}

main();
