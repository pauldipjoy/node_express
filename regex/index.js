const app = require("./app")

const port = 5000;


app.get('/products/:id([0-3]{3})', (req, res) => {
    res.send(`<h2>ID = ${req.params.id}</h2>`)
});

app.get('/products/:title([a-zA-Z0-9]{3})', (req, res) => {
    res.send(`<h2>TITLE = ${req.params.title}</h2>`)
});

app.use("*" , (req, res) => {
    res.status(404).send({
        message: "Not a valid route"
    });
});




app.listen(port , ()=>{
    console.log(`server is running on http://localhost${port}`);
});



