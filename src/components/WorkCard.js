import "./WorkCardStyles.css";

import React from "react";
import pro1 from "../assets/cinnamon-roll-capstone.png";
import { NavLink } from "react-router-dom";

const WorkCard = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        <div className="project-card">
          <img src={pro1} alt="image" />
          <h2 className="project-title">Salmon Rolls</h2>
          <div className="pro-details">
            <p>
              Cinnamon Roll foundations project while at DevMountain
              demonstrating knowledge of JS, HTML, and CSS.
            </p>
            <div className="pro-btns">
              <NavLink
                to="https://secure.vidyard.com/organizations/2544664/players/jQSzjeWaqD97mhbPNi1PZS?edit=true"
                className="btn"
              >
                View
              </NavLink>
              <NavLink
                to="http://capstone-project-ben.herokuapp.com/"
                className="btn"
              >
                Source
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
