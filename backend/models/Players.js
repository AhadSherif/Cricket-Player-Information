const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
  PlayerName: String,
  TeamName: String,
  HighestScore: Number,
  RunRate: Number,
  WicketsTaken: Number,
});

const PlayerModel = mongoose.model("Players", PlayerSchema);

module.exports = PlayerModel;
