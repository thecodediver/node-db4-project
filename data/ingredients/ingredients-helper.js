const db = require("../dbConfig")

function getRecipes() {
  return db("recipes")
}

function getShoppingList(id) {
  return db("ingredients").where("recipe_id", id)
}

function getInstructions(id) {
  return db("recipe_steps").where("recipe_id", id)
}

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
}