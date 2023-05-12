const db = require("../../data/dbConfig");

function Find(){
  return db("projects");
}

function FindByID(id){
  return db('projects').where('project_id', id).first()
}

async function Create(project) {
  const project_id = await db("projects").insert(project)
  const newTask = await FindByID(project_id)
  return newTask;
}

module.exports = {
  Find,
  Create,
  FindByID,
};
