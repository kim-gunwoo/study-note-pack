const client = require("./pool");

const insertMany = async () => {
  const db = (await client).db("study");
  const collection = db.collection("mongo");
  collection.insertMany([{ type: "JSON" }, { doc: "docs" }], (err, result) => {
    if (err) {
      throw err;
      return;
    }
    return result;
  });
};

const insertMany2 = async (data = [], c) => {
  const db = (await client).db("study");
  const collection = db.collection(c);
  const result = await collection.insertMany(data);

  return result;
};

module.exports = insertMany;
