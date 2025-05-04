const Task = require("../models/task.js");

exports.createTask = async (req, res) => {
  const { title, description, dueDate, priority, statuss } = req.body;
  const task = new Task({
    title,
    description,
    dueDate,
    priority,
    statuss,
    user: req.user.id,
  });
  await task.save();
  res.status(201).json(task);
};

exports.getTasks = async (req, res) => {
  const { statuss, priority, dueDate, page = 1, limit = 5 } = req.query;
  const filter = {};

  if (statuss) filter.statuss = statuss;
  if (priority) filter.priority = priority;
  if (dueDate) filter.dueDate = { $lte: new Date(dueDate) };

  const tasks = await Task.find(filter)
    .skip((page - 1) * limit)
    .limit(parseInt(limit));
  // .populate("user", "username");

  res.json(tasks);
};

exports.updateTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) return res.status(404).json({ message: "Task not found" });

  if (req.user.role !== "admin" && task.user.toString() !== req.user.id) {
    return res.status(403).json({ message: "Access denied" });
  }

  Object.assign(task, req.body);
  await task.save();
  res.json(task);
};

exports.deleteTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) return res.status(404).json({ message: "Task not found" });

  await task.deleteOne();
  res.json({ message: "Task deleted" });
};
