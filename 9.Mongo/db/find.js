const client = require("./pool");

const find = async () => {
  const db = (await client).db("study");
  const collection = db.collection("mongo");
  collection.find({ title: "node" }).toArray((err, item) => {
    console.log(itme);
  });
};

const find2 = async (data = {}, c) => {
  const db = (await client).db("study");
  const collection = db.collection(c);
  const result = await collection.find(data).toArray();
  return result;
};

module.exports = find;
