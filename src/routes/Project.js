import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Work from "../components/Work";
import HeroImg2 from "../components/HeroImg2";
import PricingCard from "../components/PricingCard";

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS" text="Some of my recent work" />
      <Work />
      <PricingCard />
      <Footer />
    </div>
  );
};

export default Project;
