/* In-Memory array data */

const tasks = [];

const createTask = (req, res) => {
  const { title, description } = req.body;
  const newTask = {
    id: String(tasks.length + 1),
    title,
    description,
    status: "pending",
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
};

const getAllTasks = (req, res) => {
  res.json(tasks);
};

const updateTask = (req, res) => {
  const taskId = req.params.id;
  const { title, description, status } = req.body;
  const taskIndex = tasks.findIndex((task) => task.id === taskId);
  if (taskIndex === -1) {
    res.status(404).json({ message: "Task not found" });
  } else {
    tasks[taskIndex] = {
      ...tasks[taskIndex],
      title: title || tasks[taskIndex].title,
      description: description || tasks[taskIndex].description,
      status: status || tasks[taskIndex].status,
    };
    res.json(tasks[taskIndex]);
  }
};

const deleteTask = (req, res) => {
  const taskId = req.params.id;
  const taskIndex = tasks.findIndex((task) => task.id === taskId);
  if (taskIndex === -1) {
    res.status(404).json({ message: "Task not found" });
  } else {
    tasks.splice(taskIndex, 1);
    res.json({ message: "Task deleted successfully" });
  }
};

module.exports = {
  createTask,
  getAllTasks,
  updateTask,
  deleteTask,
};
