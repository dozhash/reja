console.log("Web Serverni Boshlash!");
const express = require("express");
const app = express();

// middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// views
app.set("views", "views");
app.set("view engine", "ejs");

// routes
app.post("/create-item", async (req, res) => {
  try {
    console.log("User entered /create-item page");

    const result = await global.db.collection("plans").insertOne({
      reja: req.body.reja,
    });
    res.end("Successfully added");
  } catch (err) {
    console.error("Insert error:", err);
    res.status(500).send("Something went wrong");
  }
});

app.get("/", async (req, res) => {
  try {
    console.log("User entered / page");

    const data = await global.db.collection("plans").find().toArray();
    // console.log("Data from the backend:", data);
    res.render("reja", { items: data });
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong!");
  }
});

module.exports = app;
