import React from "react";
import { Link } from "react-router-dom";
import arrow from "../assets/icons/arrow.svg";
const InfoBox = ({ text, link, btntext }) => {
  return (
    <div className="info-box">
      <p className="font-medium sm:text-xl text-center">{text}</p>
      <Link to={link} className="neo-brutalism-white neo-btn">
        {btntext}
        <img src={arrow} className="w-4 h-4 object-contain" />
      </Link>
    </div>
  );
};
const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi there 👋!, I'am Saurav
      <br />A Fullstack developer
    </h1>
  ),
  2: (
    <InfoBox
      text="Worked with lots of complex project and picked up skills along the way"
      link="/about"
      btntext="Learn more!"
    />
  ),
  3: (
    <InfoBox
      text="Created multiple end-to-end fullstack projects"
      link="/projects"
      btntext="Have a look!"
    />
  ),
  4: (
    <InfoBox
      text="Need a project done or looking for a dev?"
      link="/contact"
      btntext="Lets connect!"
    />
  ),
};

function HomeInfo({ currentStage }) {
  return renderContent[currentStage] || null;
}

export default HomeInfo;
