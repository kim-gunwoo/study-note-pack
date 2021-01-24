"use strict";

const casheManager = require("./1.cache");

class sessionManager extends casheManager {}

const SessionManager = new sessionManager();

SessionManager.addConfig({
  token: "a",
});
console.log(SessionManager.getConfig());
