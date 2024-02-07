import React from "react";
import { Link } from "react-router-dom";
import arrow from "../assets/icons/arrow.svg";
const InfoBox = ({ text, link, btntext }) => {
  return (
    <div className="transition-all info-box select-none">
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
    <h1 className="transition-all select-none sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi there 👋!, I'am Saurav
      <br />A self-taught Fullstack developer
    </h1>
  ),
  2: (
    <InfoBox
      text="I've worked on lots of complex projects and picked up various skills along the way"
      link="/about"
      btntext="Learn more!"
    />
  ),
  3: (
    <InfoBox
      text="Created multiple end-to-end fullstack projects with varying niches"
      link="/projects"
      btntext="Have a look !"
    />
  ),
  4: (
    <InfoBox
      text="Need a project done or looking for a dev?"
      link="/contact"
      btntext="Lets connect !"
    />
  ),
};

function HomeInfo({ currentStage }) {
  return renderContent[currentStage] || null;
}

export default HomeInfo;
