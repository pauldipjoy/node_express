const express = require("express");
const app = express();

// * query parameters:
// app.get("/", (req, res) => {
//     const id = req.query.id;
//    const name = req.query.name;
// const {id, name} =req.query;
//     res.send("i am home route");
//     res.send(`<h1>Student id is:${id}, Student name is ${name}</h1>`);
//   });


// * route parameters:
// app.get("/userId/:id/userAge/:age", (req, res) => {

//     const {id, age} = req.params;
//     res.send(`<h1>Student id is:${id}, Student age is ${age}</h1>`);
// });

//* Header

app.get("/", (req, res) => {
    const id = req.header("id");
    const name = req.header("name");

    res.send(`<h1>Student id is:${id}, Student name is ${name}</h1>`);
})


module.exports = app;
