const exrpess = require("express");
const helmet = require("helmet");
const PORT = 8000;
const HOST = "0.0.0.0";

const app = exrpess();

app.use(helmet.xssFilter());
app.use(helmet.frameguard());

app.get("/", (req, res) => {
  res.send("Hellow ");
});

app.listen(PORT, HOST);
console.log(`${HOST}:${PORT}`);
