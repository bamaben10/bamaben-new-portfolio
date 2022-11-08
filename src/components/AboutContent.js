import "./AboutContentStyles.css";

import React from "react";
import { Link } from "react-router-dom";
import reactimg from "../assets/react-img.png";
import reactimg2 from "../assets/react-img2.png";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          I'm a full stack developer. New to the industry after changing career
          paths, but adaptable and teachable and striving to grow my knowledge
          even more.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={reactimg} className="img" alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={reactimg2} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
