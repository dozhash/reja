console.log("Web Serverni Boshlash!");
const express = require("express");
const app = express();

// middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// mongoDB
const mongodb = require("mongodb");

// views
app.set("views", "views");
app.set("view engine", "ejs");

// routes
app.post("/create-item", async (req, res) => {
  try {
    const new_reja = req.body.reja;

    const result = await global.db.collection("plans").insertOne({
      reja: new_reja,
    });

    // send the newly created item back to frontend
    res.json({
      _id: result.insertedId,
      reja: new_reja,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Insert failed");
  }
});

app.post("/delete-item", async (req, res) => {
  console.log("STEP2: FRONTENDDAN > BACKEND SERVERGAGA REQUIST KETTI!");

  try {
    const id = req.body.id;
    console.log("STEP3: BACKEND SERVERDAN > DATA BASEGA REQUIST KETTI!");

    await global.db
      .collection("plans")
      .deleteOne({ _id: new mongodb.ObjectId(id) });

    console.log("STEP4: DATA BASEDAN > BACKEND SERVERGA MALUMOT CHIQIB KETTI!");

    console.log("STEP5: BACKEND SERVERAN > FRONTENDGA MALUMOT CHIQIB KETTI!");

    // deleting
    res.json({ state: "delete succes" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong!");
  }
});

app.post("/edit-item", async (req, res) => {
  try {
    const data = req.body;
    // console.log(data);
    await global.db
      .collection("plans")
      .findOneAndUpdate(
        { _id: new mongodb.ObjectId(data.id) },
        { $set: { reja: data.new_input } }
      );

    res.json({ state: "edit success" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong!");
  }
});

app.post("/delete-all", async (req, res) => {
  try {
    if (req.body.delete_all) {
      await global.db.collection("plans").deleteMany({});
      res.json({ state: "Hamma rejalar o'chirildi" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong!");
  }
});

app.get("/", async (req, res) => {
  try {
    const data = await global.db.collection("plans").find().toArray();
    res.render("reja", { items: data });
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong!");
  }
});

module.exports = app;
