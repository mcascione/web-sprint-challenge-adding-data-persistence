const db = require("../../data/dbConfig");

function Find() {
  return db("projects");
}

async function Create(project) {
  await db("projects").insert(project)
  return project;
}

module.exports = {
  Find,
  Create,
};
