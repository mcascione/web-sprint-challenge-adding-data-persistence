const db = require("../../data/dbConfig");

function FindTasks() {
  return db("tasks as t")
    .leftJoin("projects as p", "t.project_id", "p.project_id")
    .select("t.*", "project_name", "project_description");
}

/* select t.*, project_name, project_description from tasks as t
    left join projects as p
        on t.project_id = p.project_id
        */

module.exports = {
  FindTasks,
};
