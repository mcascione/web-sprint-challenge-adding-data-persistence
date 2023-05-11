/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('resources').truncate()
  await knex('resources').insert([
    {resource_name: 'Youtube', resource_description: 'How-To Videos for anything'},
    {resource_name: 'Wikipedia'},
    {resource_name: 'Brookfield Residential', resource_description: 'National HomeBuilder Company that built and designed your house.'}
  ]);
};
