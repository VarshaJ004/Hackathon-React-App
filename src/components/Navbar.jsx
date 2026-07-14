import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

      <div className="container">

        <Link className="navbar-brand" to="/">
          Hackathon
        </Link>

        <div className="collapse navbar-collapse">

          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Add Team
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/view">
                View Teams
              </Link>
            </li>

          </ul>

        </div>

      </div>

    </nav>

  );
};

export default Navbar;