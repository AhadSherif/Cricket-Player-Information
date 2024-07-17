import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Users.css";
import axios from "axios";
import "bootstrap-icons/font/bootstrap-icons.css";

function Users() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3003")
      .then((result) => setPlayers(result.data))
      .catch((err) => console.log(err));
  });

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3003/deleteUser/" + id)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex vh-100 bg-secondary justify-content-center align-items-center">
      <div className="w-90 bg-white rounded p-3">
        <h2>Cricket Player List</h2>
        <Link to="/create" className=" btn btn-outline-success">
          Create
        </Link>
        <table className="table">
          <thead className="bg">
            <tr>
              <th>PlayerName</th>
              <th>TeamName</th>
              <th>HighestScore</th>
              <th>RunRate</th>
              <th>WicketsTaken</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player) => {
              return (
                <tr key={player}>
                  <td>{player.PlayerName}</td>
                  <td>{player.TeamName}</td>
                  <td>{player.HighestScore}</td>
                  <td>{player.RunRate}</td>
                  <td>{player.WicketsTaken}</td>
                  <td>
                    <Link
                      to={`/update/${player._id}`}
                      className="bi bi-pencil-fill"
                    ></Link>
                    <p
                      className="bi bi-trash-fill"
                      onClick={() => handleDelete(player._id)}
                    ></p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="roll">Name : Ahadullah Sherif
      Reg no : 23it013</p>
    </div>
  );
}

export default Users;
