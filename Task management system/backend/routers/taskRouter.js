const express = require("express");
const {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");
const { protect } = require("../middlewares/authMiddleware");
const { isAdmin } = require("../middlewares/roleMiddleware");
const router = express.Router();

router.route("/").post(protect, createTask).get(getTasks);

router
  .route("/:id")
  .put(protect, updateTask)
  .delete(protect, isAdmin, deleteTask);

module.exports = router;
