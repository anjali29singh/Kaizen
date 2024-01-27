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
  try {
    // Connect the client to the server
    await client.connect();
    console.log("connected");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);
module.exports = { run, insertData };
