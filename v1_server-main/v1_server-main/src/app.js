const express = require("express");
const app = express();
const port = 3000;
const test = require("./routes/test");
console.log(process.env.DB_HOST);
require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", test);

app.listen(port, () => {
  console.log(`listening  at http://localhost:${port}`);
});
