const express = require("express");
const app = express();


//static middleware used
app.use(express.static("public"));


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

module.exports = app;
