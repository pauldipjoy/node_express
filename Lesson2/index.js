const app = require("./app.js");
const port = 3001;

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
