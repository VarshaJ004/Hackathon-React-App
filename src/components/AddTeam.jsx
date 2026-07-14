import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import "./home.css";


const AddTeam = () => {

  const [input, changeInput] = useState({
    teamId: "",
    teamName: "",
    teamLeaderName: "",
    leaderEmail: "",
    leaderPhone: "",
    collegeName: "",
    numberOfMembers: "",
    projectTitle: "",
    problemStatementTrack: "",
    technologyStack: "",
    mentorName: "",
    registrationDate: "",
    table: ""
  });

  const inputHandler = (event) => {
    changeInput({ ...input, [event.target.name]: event.target.value });
  };

  const readValue = () => {
    axios.post("http://localhost:3001/add-team", input)
      .then((response) => {
        alert("Team Added Successfully");
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
    <Navbar />

      <div className="container mt-4">
        <h2 className="text-center mb-4">Hackathon Team Registration</h2>

        <div className="row">

          <div className="col-md-6 mb-3">
            <label>Team ID</label>
            <input type="text" className="form-control" name="teamId" onChange={inputHandler} />
          </div>

          <div className="col-md-6 mb-3">
            <label>Team Name</label>
            <input type="text" className="form-control" name="teamName" onChange={inputHandler} />
          </div>

          <div className="col-md-6 mb-3">
            <label>Team Leader Name</label>
            <input type="text" className="form-control" name="teamLeaderName" onChange={inputHandler} />
          </div>

          <div className="col-md-6 mb-3">
            <label>Leader Email</label>
            <input type="email" className="form-control" name="leaderEmail" onChange={inputHandler} />
          </div>

          <div className="col-md-6 mb-3">
            <label>Leader Phone</label>
            <input type="text" className="form-control" name="leaderPhone" onChange={inputHandler} />
          </div>

          <div className="col-md-6 mb-3">
            <label>College Name</label>
            <input type="text" className="form-control" name="collegeName" onChange={inputHandler} />
          </div>

          <div className="col-md-6 mb-3">
            <label>Number of Members</label>
            <input type="number" className="form-control" name="numberOfMembers" onChange={inputHandler} />
          </div>

          <div className="col-md-6 mb-3">
            <label>Project Title</label>
            <input type="text" className="form-control" name="projectTitle" onChange={inputHandler} />
          </div>

          <div className="col-md-6 mb-3">
            <label>Problem Statement Track</label>
            <input type="text" className="form-control" name="problemStatementTrack" onChange={inputHandler} />
          </div>

          <div className="col-md-6 mb-3">
            <label>Technology Stack</label>
            <input type="text" className="form-control" name="technologyStack" onChange={inputHandler} />
          </div>

          <div className="col-md-6 mb-3">
            <label>Mentor Name</label>
            <input type="text" className="form-control" name="mentorName" onChange={inputHandler} />
          </div>

          <div className="col-md-6 mb-3">
            <label>Registration Date</label>
            <input type="date" className="form-control" name="registrationDate" onChange={inputHandler} />
          </div>

          <div className="col-md-6 mb-3">
            <label>Table / Station Number</label>
            <input type="text" className="form-control" name="table" onChange={inputHandler} />
          </div>

          <div className="col-12 text-center">
            <button className="btn btn-primary" onClick={readValue}>
              Register Team
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AddTeam;