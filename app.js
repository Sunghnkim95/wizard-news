// const express = require("express");
// const app = express();

const app = require('express')()
const volleyball = require('volleyball')

app.use(volleyball)

app.get("/", (req, res) => res.send("Hello World!"));

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
