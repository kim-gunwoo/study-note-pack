"use strict";

const http = require("http");
const express = require("express");
const { find, insert, insertMany, delete: deleteOne, update } = require("./db");
//const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

require("express-async-errors");

class ApiServer extends http.Server {
  constructor(config) {
    const app = express();
    super(app);
    this.config = configthis.app = app;
  }
  /*
  async start() {
    this.app.get("/:item", (req, res) => {
      const { item } = req.params;
    });
    this.app.post("/:item", (req, res) => {
      const { item } = req.params;
    });
    this.app.put("/:item", (req, res) => {
      const { item } = req.params;
    });
    this.app.delete("/:item", (req, res) => {
      const { item } = req.params;
    });
    return this;
  }
*/
  async start() {
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.get("/:collection/:data?", async (req, res) => {
      const { collection, data } = req.params;
      const { c } = req.query;
      const result = await find(c, collection);
      res.send(result);
    });
    this.app.post("/:collection/:data?", async (req, res) => {
      const { collection } = req.params;
      const { newdata } = req.body;
      const result = await insert(newdata);
      res.send(result);
    });
    this.app.put("/:collection/:id?", async (req, res) => {
      const { collection, id } = req.params;
      const { newdata } = req.body;
      const result = await update(id, newdata, collection);
      res.send(result);
    });
    this.app.delete("/:collection/:id?", async (req, res) => {
      //const { collection, id } = req.params;
      const { collection } = req.params;
      const result = await deleteOne(id, collection);
      res.send(result);
    });

    return this;
  }
}

module.exports = ApiServer;

async function createServer(config) {
  const server = new ApiServer(config);
  return server.start();
}
exports.createServer = createServer;
