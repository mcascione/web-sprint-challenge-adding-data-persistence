const db = require("../../data/dbConfig");

function FindResource() {
  return db("resources");
}

function FindResourceById(id) {
  return db("resources").where("resource_id", id).first();
}

async function CreateResource(resource) {
  const resourceId = await db("resources").insert(resource);
  const newResource = await FindResourceById(resourceId);
  return newResource;
}

module.exports = {
  FindResource,
  CreateResource,
  FindResourceById,
};
