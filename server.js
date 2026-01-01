const http = require("http");
const { MongoClient } = require("mongodb");

const connectionString =
  "mongodb+srv://dozhash:Tetta21@cluster0.t1o5ks4.mongodb.net/";

const client = new MongoClient(connectionString);

async function startServer() {
  try {
    await client.connect();
    console.log("MongoDB connection succeeded");

    const db = client.db("Reja");
    global.db = db;

    const app = require("./app");
    const server = http.createServer(app);

    const PORT = 3000;
    server.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("ERROR connecting to MongoDB:", err);
  }
}

startServer();
