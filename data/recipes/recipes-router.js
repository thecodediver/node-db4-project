const router = require("express").Router()
const Recipes = require("./recipes-helper")

router.get("/", (req, res) => {
  Recipes.getRecipes()
  .then(data => {
    res.status(200).json(data)
  })
  .catch(err => {
    res.status(500).json({ message: err.message })
  })
})

router.get("/:id/shoppingList", (req, res) => {
  Recipes.getShoppingList(req.params.id)
  .then(data => {
    res.status(200).json(data)
  })
  .catch(err => {
    res.status(500).json({ message: err.message })
  })
})

router.get("/:id/instructions", (req, res) => {
  Recipes.getInstructions(req.params.id)
  .then(data => {
    res.status(200).json(data)
  })
  .catch(err => {
    res.status(500).json({ message: err.message })
  })
})

module.exports = router