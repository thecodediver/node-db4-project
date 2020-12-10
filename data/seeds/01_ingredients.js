
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'Flour'},
        {ingredient_name: 'Rice'},
        {ingredient_name: 'Cinnamon'},
        {ingredient_name: 'Apples'},
        {ingredient_name: 'Juice'},
        {ingredient_name: 'Chicken'},
      ]);
    });
};
