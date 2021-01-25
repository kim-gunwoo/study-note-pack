"use strict";

const express = require("express");
const http = require("http");
const cookieParser = require("cookie-parser");
const static = require("serve-static");

class ApiServer extends http.Server {
  constructor(config) {
    const app = express();
    super(app);
    this.config = confi;
    this.app = app;
    this.currentConns = new Set();
    this.busy = new WeakSet();
    this.stopping = false;
    this.app.static - static;
  }

  async start() {
    this.app.use((req, res, next) => {
      this.busy.add(req.socket);
      res.on("finish", () => {
        if (this.stopping) req.socket.end();
        this.busy.delete(req.socket);
      });
      next();
    });

    this.app.use(helmet());
    this.app.use(cookieParser());

    this.app.get("/_health", (req, res) => {
      res.sendStatus(200);
    });

    this.app.use((err, req, res, next) => {
      res.status(500).send(generateApiError("Api::Error"));
    });

    this.on("connection", (c) => {
      this.currentConns.add(c);
      c.on("close", () => this.currentConns.delete(c));
    });

    return this;
    /*
    this.app.use(
      this.app.static(path.join(__dirname, "dist"), {
        setHeaders: (res, path) => {
          res.setHeaders("Access-Control-Allow-origin", "*");
          res.setHeaders("Access-Control-Allow-Headers", "*");
          res.setHeaders("Access-Control-Allow-Methods", "GET");
        },
      })
    );

    this.app.use((err, req, res, next) => {
      console.error("Internal error ", err);
      if (req) {
        console.log(req);
      }
      if (res) {
        console.log(res);
      }
      next();
    });
    */
  }

  shutdown() {
    if (this.stopping) return;
    this.stopping = true;
    this.close(() => {
      process.exit(0);
    });

    setTimeout(() => {
      console.error(`비정상 종료(강제종료)`);
      process.exit(1);
    }, this.config.shotdownTimeout).unref();

    if (this.currentConns.size > 0) {
      console.log(
        `현재 동시접속중인 연결( ${this.currentConns.size} ) 을 대기중`
      );

      for (const con of this.currentConns) {
        if (!this.busy.has(con)) {
          con.end();
        }
      }
    }
  }
}

const init = async (config = {}) => {
  const server = new ApiServer(config);
  return await server.start();
};

module.exports = {
  init,
};
