import React from "react";
import Navbar from "./Navbar";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />

      <div className="hero">

        <div className="hero-content">

          <h1>🏆 National Level Hackathon 2026</h1>

          <p>
            Welcome to the Hackathon Team Management System.
            Register your team, showcase your innovation,
            and build solutions that shape the future.
          </p>

          <div className="hero-buttons">
            <a href="/" className="btn btn-light btn-lg me-3">
              Register Team
            </a>

            <a href="/view" className="btn btn-warning btn-lg">
              View Teams
            </a>
          </div>

        </div>

      </div>

      <div className="container mt-5">

        <div className="row">

          <div className="col-md-4">

            <div className="feature-card">
              <h3>💡 Innovation</h3>
              <p>
                Develop creative solutions for real-world
                challenges using modern technologies.
              </p>
            </div>

          </div>

          <div className="col-md-4">

            <div className="feature-card">
              <h3>👨‍💻 Teamwork</h3>
              <p>
                Collaborate with talented developers,
                designers, and innovators.
              </p>
            </div>

          </div>

          <div className="col-md-4">

            <div className="feature-card">
              <h3>🏅 Achievement</h3>
              <p>
                Compete nationally, win exciting prizes,
                and gain valuable experience.
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Home;