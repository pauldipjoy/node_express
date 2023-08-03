const express = require("express");
const app = express();

const myMiddleware = (req, res, next) => {
console.log("Middleware function called");
req.requestTime = new Date(Date.now());
next();
};



app.use(myMiddleware);

app.use((req, res, next)=>{
  res.send("404 bad request");
});




app.get("/",  (req, res) => {
  console.log("i am home." + req.requestTime);  
  res.send("<h1>This is home router</h1>");
});

app.get("/about",  (req, res) => {
  console.log("i am about." + req.requestTime);
  res.send("<h1>This is about router</h1>");
});



module.exports = app;
