const express = require("express");
const Task = require("./model");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const tasks = await Task.FindTasks();
    const formattedTasks = tasks.map((task) => ({
      ...task,
      task_completed: task.task_completed === 1 ? true : false,
    }));
    res.status(200).json(formattedTasks);
  } catch (err) {
    next(err);
  }
});

//eslint-disable-next-line
router.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    customMessage: "something went wrong in the task router",
  });
});

module.exports = router;
