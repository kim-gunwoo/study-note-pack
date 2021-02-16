const client = require("./pool");

const deleteOne = async () => {
  const db = (await client).db("study");
  const collection = db.collection("mongo");
  collection.deleteOne({ title: "node" }, (err, result) => {
    if (err) {
      throw err;
    }
    return result;
  });
};

const deleteOne2 = async (data = {}, c) => {
  const db = (await client).db("study");
  const collection = db.collection(c);
  const result = await collection.deleteOne(data);
  return result;
};

module.exports = deleteOne;
