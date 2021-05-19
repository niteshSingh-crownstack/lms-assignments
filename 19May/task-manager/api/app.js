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

app.patch("/lists/:id", (req, res) => {
  List.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: req.body,
    }
  ).then(() => {
    res.sendStatus(200);
  });
});

app.delete("/lists/:id", (req, res) => {
  List.findOneAndRemove({
    _id: req.params.id,
  }).then((removedListDoc) => {
    res.send(removedListDoc);
  });
});

//Get /lists/:listId/tasks
// To Get all task in specified list
app.get("/lists/:listId/tasks", (req, res) => {
  Task.find({
    _listId: req.params.listId,
  }).then((tasks) => {
    res.send(tasks);
  });
});

app.get("/lists/:listId/tasks", (req, res) => {
  Task.find({
    _listId: req.params.listId,
  }).then((tasks) => {
    res.send(task);
  });
});

app.post("/lists/:listId/tasks", (req, res) => {
  let newTask = new Task({
    title: req.body.title,
    _listId: req.params.listId,
  });
  newTask.save().then((newTaskDoc) => res.send(newTaskDoc));
});

app.patch("/lists/:listId/tasks/:taskId", (req, res) => {
  Task.findOneAndUpdate(
    { _id: req.params.taskId, _listId: req.params.listId },
    {
      $set: req.body,
    }
  ).then(() => {
    res.sendStatus(200);
  });
});

app.delete("/lists/:listId/tasks/:taskId", (req, res) => {
  Task.findOneAndRemove({
    _id: req.params.taskId,
    _listId: req.params.listId,
  }).then((removedTaskDoc) => {
    res.send(removedTaskDoc);
  });
});

app.listen(3000, () => {
  console.log("Server is Listening on port 3000");
});
