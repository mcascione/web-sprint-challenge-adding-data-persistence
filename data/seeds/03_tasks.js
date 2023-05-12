/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('tasks').truncate()
  await knex('tasks').insert([
    {task_description: 'purchase tools', task_notes: 'Lowes for $125', task_completed: true, project_id: 1 },
    {task_description: 'dig hole and stake tree', task_completed: false, project_id: 1 },
    {task_description: 'purchase seeds, dirt and tomato skirt', task_notes: 'San Marzano from Amazon', task_completed: true, project_id: 2 },
    {task_description: 'prep the soil and skirt and plant seeds', task_notes: 'plant by May 15 for late summer tomatoes', task_completed: false, project_id: 2 },
    {task_description: 'determine floor match', task_notes: 'call Brookfield for model home specs', task_completed: false, project_id: 3 },
    {task_description: 'find flooring/carpet specialist', task_notes: 'ask Brookfield for workman recs', task_completed: false, project_id: 3 }
  ]);
};
