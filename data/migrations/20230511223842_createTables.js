/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema

    .createTable("projects", (tbl) => {
      tbl.increments("project_id")
      tbl.string("project_name").notNullable();
      tbl.string("project_description")
      tbl.boolean("project_completed").defaultTo(false);
    })
    .createTable("resources", (tbl) => {
      tbl.increments("resource_id")
      tbl.string("resource_name").unique().notNullable();
      tbl.string("resource_description")
    })
    .createTable("tasks", (tbl) => {
      tbl.increments("task_id");
    })
    .createTable("project_resources", (tbl) => {
      tbl.increments("project_resource_id");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
