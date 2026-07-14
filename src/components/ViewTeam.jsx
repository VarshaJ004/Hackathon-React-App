import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import "./home.css";


const ViewTeam = () => {

  const [team, changeTeam] = useState([]);

  const fetchData = () => {
    axios.post("http://localhost:3001/view-team")
      .then((response) => {
        changeTeam(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>

     <Navbar />

      <div className="container mt-4">

        <h2 className="text-center mb-4">Registered Teams</h2>

        <table className="table table-bordered table-striped">

          <thead className="table-dark">
            <tr>
              <th>Team ID</th>
              <th>Team Name</th>
              <th>Leader</th>
              <th>Email</th>
              <th>Phone</th>
              <th>College</th>
              <th>Members</th>
              <th>Project</th>
              <th>Track</th>
              <th>Technology</th>
              <th>Mentor</th>
              <th>Date</th>
              <th>Table</th>
            </tr>
          </thead>

          <tbody>

            {team.map((value, index) => {

              return (
                <tr key={index}>
                  <td>{value.teamId}</td>
                  <td>{value.teamName}</td>
                  <td>{value.teamLeaderName}</td>
                  <td>{value.leaderEmail}</td>
                  <td>{value.leaderPhone}</td>
                  <td>{value.collegeName}</td>
                  <td>{value.numberOfMembers}</td>
                  <td>{value.projectTitle}</td>
                  <td>{value.problemStatementTrack}</td>
                  <td>{value.technologyStack}</td>
                  <td>{value.mentorName}</td>
                  <td>{value.registrationDate}</td>
                  <td>{value.table}</td>
                </tr>
              );

            })}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default ViewTeam;