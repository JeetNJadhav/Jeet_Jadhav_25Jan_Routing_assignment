const express = require("express");
const app = express();
const router = require("./routes");
const bodyParser = require("body-parser");

app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", router);

app.listen(3000, (err) => {
  if (err) console.log(err);

  console.log("Server is up and running!");
});
