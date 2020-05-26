var express = require('express');
const app = express();
const port = 5600;

app.use(express.static("./dist"));
app.use(express.static("./public"));

console.log(__dirname)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));