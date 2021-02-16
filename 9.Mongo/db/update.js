const client = require("./pool");

const update = async () => {
  const db = (await client).db("study");
  const collection = db.collection("mongo");
  collection.updateOne(
    { title: "node" },
    { $set: { title: "react" } },
    (err, result) => {
      if (err) {
        throw err;
      }
      return result;
    }
  );
};

const update2 = async (condition = {}, data = {}, c) => {
  const db = (await client).db("study");
  const collection = db.collection(c);
  const result = await collection.updateOne(condition, { $set: data });
  return result;
};

module.exports = update;
