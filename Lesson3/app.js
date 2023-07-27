const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

//* post request:
app.post("/register", (req, res) => {
  
  // const { name, age } = req.body;
  // res.send(`WELCOME ${name} . You are ${age} years old`);

  const { fullName, age } = req.body;
  res.send(`<h1>My name is ${fullName} and Age is ${age}</h1>`);
  //res.send("Send Data");
});

module.exports = app;
