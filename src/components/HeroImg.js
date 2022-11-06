import "./HeroImgStyles.css";

import React from "react";

import PCBImg from "../assets/PCB-img.png";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={PCBImg} alt="PCBImg" />
      </div>
      <div className="content">
        <p>HI, I'M BEN</p>
        <h1>Software Engineer</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
