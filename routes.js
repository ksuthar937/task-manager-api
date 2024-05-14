const express = require("express");

const router = express.Router();

const {
  createTask,
  getAllTasks,
  updateTask,
  deleteTask,
} = require("./controller");

/* Create a Task */
router.post("/task", createTask);

/* List all Tasks */
router.get("/tasks", getAllTasks);

/* Update a Task */
router.put("/task/:id", updateTask);

/* Delete a Task */
router.delete("/task/:id", deleteTask);

module.exports = router;
