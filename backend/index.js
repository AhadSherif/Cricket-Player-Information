const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PlayerModel = require("./models/Players");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/crud2");

app.get("/", (req, res) => {
  PlayerModel.find({})
    .then((players) => res.json(players))
    .catch((err) => res.json(err));
});

app.get("/getUser/:id", (req, res) => {
  const id = req.params.id;
  PlayerModel.findById({ _id: id })
    .then((players) => res.json(players))
    .catch((err) => res.json(err));
});

app.put("/updatePlayer/:id", (req, res) => {
  const id = req.params.id;
  PlayerModel.findByIdAndUpdate(
    { _id: id },
    {
      PlayerName: req.body.PlayerName,
      TeamName: req.body.TeamName,
      HighestScore: req.body.HighestScore,
      RunRate: req.body.RunRate,
      WicketsTaken: req.body.WicketsTaken,
    }
  )
    .then((players) => res.json(players))
    .catch((err) => res.json(err));
});

app.post("/createPlayer", (req, res) => {
  PlayerModel.create(req.body)
    .then((players) => res.json(players))
    .catch((err) => res.json(err));
});

app.delete('/deleteUser/:id', (req, res) => {
  const id = req.params.id;
  PlayerModel.findByIdAndDelete({_id:id})
  .then((res) => res.json(res))
  .catch((err) => res.json(err))
})

app.listen(3003, () => {
  console.log("Server is running");
});
