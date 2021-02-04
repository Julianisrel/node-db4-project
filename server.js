const app = require("app");
const express = require("express");
const helmet = require("helmet")
const cors = require("cors")

const recipeRouter = require("./recipebook/recipeRouter");

const server = express();
server.use(express.json());

app.use(helmet())
app.use(cors())


app.use("/api", recipeRouter);

app.get("/", (req, res) => {
    res.status(200).json({message: "server running"})
})

module.exports = server
