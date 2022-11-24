import "./WorkCardStyles.css";

import React from "react";
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  const handleClick = (link) => {
    window.open(link);
  };

  return (
    <div className="work-container">
      <h1 className="project-heading">Project</h1>
      <div className="project-container">
        <div className="project-card">
          <img src={props.imgsrc} alt="imgsrc" />
          <h2 className="project-title">{props.title}</h2>
          <div className="pro-details">
            <p>{props.text}</p>
            <div className="pro-btns">
              <button onClick={() => handleClick(props.view)} className="btn">
                View
              </button>
              <button onClick={() => handleClick(props.source)} className="btn">
                Source
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
