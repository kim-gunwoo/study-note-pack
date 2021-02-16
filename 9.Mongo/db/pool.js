const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";

const client = new Promise((resolve, reject) => {
  MongoClient.connect(
    url,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err, client) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(client);
    }
  );
});

module.exports = client;
