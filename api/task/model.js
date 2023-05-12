const db = require("../../data/dbConfig");

function FindTasks() {
  return db("tasks as t")
    .leftJoin("projects as p", "t.project_id", "p.project_id")
    .select("t.*", "project_name", "project_description");
}

function FindTaskByID(id) {
  return db("tasks").where("task_id", id).first();
}

async function CreateTask(task) {
  const task_id = await db("tasks").insert(task);
  const newTask = await FindTaskByID(task_id);
  return newTask;
}

module.exports = {
  FindTasks,
  CreateTask,
  FindTaskByID,
};
