const express = require("express");
const app = express();
const userRouter = require("./routes/users.route");

app.use("/api/user", userRouter);

app.use("/register", (req, res) => {
  // res.status(200).json({
  //   name: "Dipjoy Paul",
  //   message: "i am register page",
  //   statusCode: 200,
  // });
  // res.redirect("/signin");

 res.statusCode = 200;
 res.sendFile(__dirname + "/views/register.html")

});

app.use("/signin", (req, res) => {
  // res.send("I am sign in page");
  // res.cookie("name", "Dipjoy");
  // res.cookie("age", "30");

  res.clearCookie("name");

  res.append("id", "12000")
  res.end();
});

app.use("/", (req, res) => {
  //res.send("<h1>I am a get request at home route</h1>");
  res.statusCode = 200;
 res.sendFile( __dirname + "/views/index.html")

});



app.use((req, res) => {
  res.send("<h1> ERROR 404!!</h1>");
});

module.exports = app;
