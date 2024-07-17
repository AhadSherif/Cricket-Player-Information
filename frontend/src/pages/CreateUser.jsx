import React, { useState } from "react";
import "./CreateUser.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [PlayerName, setPlayerName] = useState();
  const [TeamName, setTeamName] = useState();
  const [HighestScore, setHighestScore] = useState();
  const [RunRate, setRunRate] = useState();
  const [WicketsTaken, setWicketsTaken] = useState();
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3003/createPlayer", {
        PlayerName,
        TeamName,
        HighestScore,
        RunRate,
        WicketsTaken,
      })
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 bg-secondary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={Submit}>
          <h2>Add Player Details</h2>
          <div className="mb-2">
            <label htmlFor="">PlayerName</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setPlayerName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">TeamName</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setTeamName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">HighestScore</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setHighestScore(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">RunRate</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setRunRate(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">WicketsTaken</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setWicketsTaken(e.target.value)}
            />
          </div>
          <button className="btn btn-primary">Add Player</button>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;
