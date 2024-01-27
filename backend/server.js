const express = require("express");

const cors = require("cors");

const bodyParser = require("body-parser");

const app = express();

const dotenv = require("dotenv");

dotenv.config();

const { MongoClient, ServerApiVersion } = require("mongodb");

//connection string
const uri = process.env.CONNECTION_STRING;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const db = client.db("User");

const notes = db.collection("notes");

async function insertData(data) {
  const p = await notes.insertOne(data);
  console.log(p);
}
async function run() {
  // Connect the client to the server
  await client.connect();
  console.log("connected");
}

run().catch(console.dir);
app.use(cors());

app.use(bodyParser.json());

app.get("/", (req, res) => {
  console.log("server is running ...");
});

app.post("/api/notes", (req, res) => {
  const data = req.body;
  insertData(data);

  res.send(JSON.stringify(data));
});

app.listen(5000);
