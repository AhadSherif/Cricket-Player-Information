import React, { useEffect, useState } from "react";
import "./UpdateUser.css";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function UpdateUser() {
  const { id } = useParams();
  const [PlayerName, setPlayerName] = useState();
  const [TeamName, setTeamName] = useState();
  const [HighestScore, setHighestScore] = useState();
  const [RunRate, setRunRate] = useState();
  const [WicketsTaken, setWicketsTaken] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3003/getUser/" + id)
      .then((result) => {console.log(result)
        setPlayerName(result.data.PlayerName)
        setTeamName(result.data.TeamName)
        setHighestScore(result.data.HighestScore)
        setRunRate(result.data.RunRate)
        setWicketsTaken(result.data.WicketsTaken)
      })
      .catch((err) => console.log(err));
  },[]);

  const Update = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3003/updatePlayer/"+id, {
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

  }

  return (
    <div className="d-flex vh-100 bg-secondary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={Update}>
          <h2>Update Player Details</h2>
          <div className="mb-2">
            <label htmlFor="">Player Name</label>
            <input type="text" className="form-control"
            value={PlayerName} onChange={(e) => setPlayerName(e.target.value)} />
          </div>
          <div className="mb-2">
            <label htmlFor="">Team Name</label>
            <input type="text" className="form-control"
            value={TeamName} onChange={(e) => setTeamName(e.target.value)} />
          </div>
          <div className="mb-2">
            <label htmlFor="">Highest Score</label>
            <input type="text" className="form-control"
            value={HighestScore} onChange={(e) => setHighestScore(e.target.value)} />
          </div>
          <div className="mb-2">
            <label htmlFor="">Run Rate</label>
            <input type="text" className="form-control"
            value={RunRate} onChange={(e) => setRunRate(e.target.value)} />
          </div>
          <div className="mb-2">
            <label htmlFor="">Wickets Taken</label>
            <input type="text" className="form-control"
            value={WicketsTaken} onChange={(e) => setWicketsTaken(e.target.value)} />
          </div>
          <button className="btn btn-primary">Update Player</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;
