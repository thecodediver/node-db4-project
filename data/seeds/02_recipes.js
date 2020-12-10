
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: 'Bagel Su-Flay'},
        {recipe_name: 'Chicken Pot Pie'},
        {recipe_name: 'Mac N Cheese'},
        {recipe_name: 'Peanut Butter and Jelly'},
        {recipe_name: 'Turkey Club'},
        {recipe_name: 'Pepperoni Pizza'},
      ]);
    });
};
