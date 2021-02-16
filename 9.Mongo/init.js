const path = require("path");
const fs = require("fs");
//const { insert } = require("./db");
const dirPath = path.join(__dirname, "json");

fs.readdir(dirPath, async (err, files) => {
  if (err) {
    console.log(err);
    return;
  }
  for (const file of files) {
    console.log(file);
    const { collection, data } = require(`${dirPath}/${file}`);
    console.log(collection);
    //await insert(data, collection);
  }

  /*
  files.forEach((file) => {
    const { collection, data } = require(`${dirPath}\\${file}`);
    console.log(collection);
  });
*/
});
