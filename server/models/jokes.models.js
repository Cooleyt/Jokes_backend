const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
        setup: [String, "Setup must be at least 10 characters long"],
        punchLine: [String, "Punchlune must be at least 3 characters long"]
}, {timestamps:true });

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;