/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('projects').truncate()
  await knex('projects').insert([
    { project_name: 'straighten tree', project_completed: false},
    { project_name: 'plant tomatoes', project_description: 'plant tomato seeds before summer', project_completed: 1},
    { project_name: 'replace carpet', project_description: 'replace the carpet in the downstairs bedroom with matching flooring', project_completed: 0}
  ]);
};
