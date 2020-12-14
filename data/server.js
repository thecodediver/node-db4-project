const express = require("express")
const cors = require("cors")
const RecipesRouter = require("./recipes/recipes-router")
const IngredientsRouter = require("./ingredients/ingredients-router")

const server = express()
server.use(express.json())
server.use(cors())

server.use("/api/recipes", RecipesRouter)
server.use("/api/ingredients", RecipesRouter)

server.get("/", (req, res) => {
  res.status(200).json("You did it!")
})


module.exports = server