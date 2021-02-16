const assert = require("assert");
const insert = require("../insert");
const find = require("../find");
const update = require("../update");
const deleteOne = require("../deleteOne");
const insertMany = require("../insertMany");

describe("Mongo DB Test", () => {
  it("#insert", async () => {
    const res = await insert({ test: "something else" });
    assert(res);
  });

  it("#insertMany", async () => {
    const res = await insertMany([
      { test: "new test" },
      { anotherTest: "another test" },
    ]);
    assert(res);
  });

  it("#find ALL", async () => {
    const res = await find();
    assert(res);
  });

  it("#find Specific", async () => {
    const res = await find({ test: "something else" });
    assert(res);
  });

  it("#update", async () => {
    const res = await update({ test: "something else" }, { test: "new data" });
    assert(res);
  });

  it("#deleteOne", async () => {
    const res = await delete { test: "new data" };
    assert(res);
  });

  it("#deleteOne", async () => {
    const res = await deleteOne({ test: "new data" });
    assert(res);
  });
});

/*
mocha db.js --timeout 9000


*/
