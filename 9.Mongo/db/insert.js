const client = require("./pool");

const insert = async () => {
  const db = (await client).db("study");
  const collection = db.collection("mongo");
  collection.insertOne({ title: "node" }, (err, result) => {
    if (err) {
      throw err;
    }
    console.log(result);
  });
};

const insert2 = async (data = {}, c) => {
  const db = (await client).db("study");
  const collection = db.collection(c);
  const result = await collection.insertOne(data);

  return result;
};

module.exports = insert;
