const express = require("express");
const app = express();

const { mongoose } = require("./db/mongoose");

const bodyParser = require("body-parser");
//Load in the mongoose models
const { List, Task } = require("./db/models");

//Load middleware
app.use(bodyParser.json());

// Route Handlers
// List Routes
app.get("/", (req, res) => {
  List.find({}).then((lists) => {
    res.send(lists);
  });
});

app.post("/lists", (req, res) => {
  let title = req.body.title;

  let newList = new List({
    title,
  });
  newList.save().then((listDoc) => {
    res.send(listDoc);
  });
});

app.patch("/lists/:id", (req, res) => {});

app.delete("/lists/:id", (req, res) => {});

app.listen(3000, () => {
  console.log("Server is Listening on port 3000");
});
