const cors = require("cors");
const express = require("express");

const PORT = process.env.PORT || 6060;

const app = express();

app.use(cors());
app.use(express.json());

let TODOS = [{ id: 1, title: "Do your homework!", done: false }];

app.post(`/`, (req, res) => {
  const { title, done } = req.body;
  if (!title.trim()) return res.status(400).json({ message: "Bad Request!" });

  const data = { title, done, id: Math.random() };

  TODOS.push(data);

  return res.json({ message: "Malades" });
});

app.get(`/`, (req, res) => {
  return res.json(TODOS);
});

app.delete(`/:todoId`, (req, res) => {
  TODOS = TODOS.filter((todo) => todo.id !== +req.params.todoId);
  return res.json({ message: "Successfully deleted!" });
});

app.put(`/:todoId`, (req, res) => {
  const todo = TODOS.findIndex((el) => el.id === +req.params.todoId);
  if (typeof todo !== "number") {
    return res.status(404).json({ message: "Not Found!" });
  }

  TODOS[todo].done = !TODOS[todo].done;

  return res.json({ message: "Successfully deleted!" });
});

app.listen(PORT, () => {
  return console.log(`Server is working on ${PORT} port`);
});
