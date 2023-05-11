/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('project_resources').truncate()
  await knex('project_resources').insert([
    {project_id: 1, resource_id: 1, task_id: 1},
    {project_id: 1, resource_id: 1, task_id: 2},
    {project_id: 2, resource_id: 2, task_id: 3},
    {project_id: 2, resource_id: 1, task_id: 4},
    {project_id: 3, resource_id: 3, task_id: 5},
    {project_id: 3, resource_id: 3, task_id: 6}
  ]);
};
