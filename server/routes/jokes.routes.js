const JokeController = require("../controllers/jokes.controller");
const Joke = require("../models/jokes.models");

module.exports = app => {
    app.get("/api/jokes/", JokeController.findAllJokes);
    app.get("/api/joke/:_id", JokeController.findOneSingleJoke);
    app.put("/api/joke/update/:_id", JokeController.updateExistingJoke);
    app.post("/api/joke/new", JokeController.createNewJoke);
    app.delete("/api/joke/delete/:_id", JokeController.deleteAnExistingJoke);
};