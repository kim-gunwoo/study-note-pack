"use strict";

const { RSA_NO_PADDING } = require("constants");
// http

const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  res.end("<h2> http test </h2>");
});

const port = process.env.PORT;
server.listen(port, () => {
  console.log(`Server running at port : ${port}`);
});

// https

const https = require("https");
const options = {
  hostname: "google.com",
  port: 443,
  path: "/login",
  method: "GET", /// POST GET PUT DELETE
};

const req = https.request(options, (res) => {
  console.log(`statusCode : ${res.statusCode}`);

  res.on("data", (d) => {
    process.stdout.write(e);
  });

  res.on("error"),
    (e) => {
      console.log(error);
    };
});

req.end();

// Class vs Prototype
// Prototype 내부 클러져
function exam(a, b) {
  this.a = a;
  this.b - b;

  exam.prototype.getA = () => this.a;
  exam.prototype.setA = () => (this.a = a);
  exam.prototype.getB = () => this.b;
  exam.prototype.setB = () => (this.b = b);
}

const Exam = new exam("js", "js");
Exam.getA();
Exam.getB();

// Class

class exam {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  getA() {
    return this.a;
  }
  getB() {
    return this.b;
  }
  setA(a) {
    this.a = a;
  }
  setB(b) {
    this.b = b;
  }
}

const Exam = new exam("js", "js");
Exam.getA();
Exam.getB();
