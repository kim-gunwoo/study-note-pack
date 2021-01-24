"use strict";

// emmit
const EventEmitter = require("events");

class ChatManager extends EventEmitter {}

const chatManager = new ChatManager();

chatManager.on("join", () => {
  console.log("join on");
});

chatManager.emit("join");

// dns
const dns = require("dns");
const { hostname } = require("os");

dns.lookup("test.com", (err, address, family) => {
  console.log(`address : ${address} , ${family}`);
});

dns.resolve4("archive.org", (err, addresses) => {
  if (err) throw err;

  const res = JSON.stringify(addresses);
  console.log(res);

  addresses.forEach((a) => {
    dns.reverse(a, (err, hostname) => {
      if (err) throw err;

      console.log(`reverse ${a}, ${JSON.stringify(hostname)}`);
    });
  });
});

// file system
const fs = require("fs");

fs.readFile("test.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(data);
});

const txt = "test txt";
fs.writeFile("test.txt", txt, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("success");
});

const { promisify } = require("util");

const read = promisify(fs.readFile);
const write = promisify(fs.writeFile);

const writeAndRead = async (data = "") => {
  try {
    await write("test.txt", data);

    return await read("test.txt");
  } catch (err) {
    console.error(err);
  }
};

writeAndRead("test test test");

// Promise.all
const promise1 = new Promise((resolve, reject) => resolve("바로 호출"));
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("3초 뒤 호출"), 3000);
});

// 마지막 resolve 기준으로 반환
Promise.all([promise1, promise2]);

//  Promise.race

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(2000), 3000);
});
const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("바로"), 0);
});

// 가장 먼저 끝난 resolve 만 반환
Promise.race([promise3, promise4]).then((value) => console.log(value));
