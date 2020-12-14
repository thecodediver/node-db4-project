
exports.up = function(knex) {
  return knex.schema.createTable("ingredients", (tbl) => {
    tbl.increments("ingredient_id")
    tbl.string("ingredient_name", 50).notNullable()
  })
  .createTable("recipes", (tbl) => {
    tbl.increments("recipe_id")
    tbl.string("recipe_name", 100).notNullable()
  })
  .createTable("recipe_ingredients", (tbl) => {
    tbl.increments("recipe_ingredient_id")
    tbl.integer("recipe_id")
      .unsigned().notNullable()
      .references("recipe_id").inTable("recipes")
      .onDelete("RESTRICT").onUpdate("RESTRICT")
    tbl.integer("ingredient_id")
      .unsigned().notNullable()
      .references("ingredient_id").inTable("ingredients")
      .onDelete("RESTRICT").onUpdate("RESTRICT")
    tbl.integer("ingredient_quantity").notNullable()
  })
  .createTable("recipe_steps", (tbl) => {
    tbl.increments("recipe_step_id")
    tbl.integer("step_number").notNullable()
    tbl.integer("recipe_id")
      .unsigned().notNullable()
      .references("recipe_id").inTable("recipes")
      .onDelete("RESTRICT").onUpdate("RESTRICT")
    tbl.string("step_details").notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("recipe_steps")
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("recipes")
    .dropTableIfExists("ingredients")
};
