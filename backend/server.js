const express = require("express");

const cors = require("cors");

const bodyParser = require("body-parser");
const { run } = require("./database");

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.get("/", (req, res) => {
  console.log("server is running ...");
});

app.post("/api/notes", (req, res) => {
  const data = req.body;
  console.log(data.text);
  console.log(data.title);
  res.send(JSON.stringify(data));
});

app.listen(5000);
