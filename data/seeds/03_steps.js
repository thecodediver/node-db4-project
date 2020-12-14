
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_steps').insert([
        {step_number: 1, recipe_id: 1, step_details: "This is the first step"},
        {step_number: 2, recipe_id: 1, step_details: "This is the second step"},
        {step_number: 3, recipe_id: 1, step_details: "This is the third step"},
        {step_number: 4, recipe_id: 1, step_details: "This is the fourth step"},
        {step_number: 5, recipe_id: 1, step_details: "This is the fifth step"},
        {step_number: 6, recipe_id: 1, step_details: "This is the sixth step"},
        {step_number: 1, recipe_id: 2, step_details: "Recipe 2. This is the first step"},
        {step_number: 2, recipe_id: 2, step_details: "Recipe 2. This is the second step"},
        {step_number: 3, recipe_id: 2, step_details: "Recipe 2. This is the third step"},
        {step_number: 4, recipe_id: 2, step_details: "Recipe 2. This is the fourth step"},
        {step_number: 5, recipe_id: 2, step_details: "Recipe 2. This is the fifth step"},
        {step_number: 6, recipe_id: 2, step_details: "Recipe 2. This is the sixth step"},
      ]);
    });
};
