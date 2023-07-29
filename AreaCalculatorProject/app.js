const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// Body parsing used here...
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.get("/", (req, res) => {
  res.sendFile(__dirname + "/routes/index.html");
});

app.get("/circle", (req, res) => {
  res.sendFile(__dirname + "/routes/circle.html");
});

app.get("/triangle", (req, res) => {
  res.sendFile(__dirname + "/routes/triangle.html");
});

app.post("/circle", (req, res) => {
    const {radius} = req.body;
  
    const area = Math.PI * radius * radius;
  
    res.send(`<h2>Area of Circle is: ${area}</h2>`);
  });

app.post("/triangle", (req, res) => {
  const { base, height } = req.body;

  const area = 0.5 * base * height;

  res.send(`<h2> Area of Triangle is: ${area} </h2>`);
});



module.exports = app;
