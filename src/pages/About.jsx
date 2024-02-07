import React from "react";
import { experiences, skills } from "../constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <section className="max-container">
        {/* intro */}
        <h1 className="head-text">
          Hello there I'am,
          <span className="blue-gradient_text font-semibold drop-shadow">
            {" "}
            Saurav
          </span>{" "}
          👋
        </h1>

        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            Hello there! I'm a Full Stack developer with a passion for creating
            awesome and scalable web apps using the MERN stack.
          </p>{" "}
        </div>
        {/* skills */}
        <div className="py-10 flex flex-col">
          <h3 className="subhead-text">My Skills</h3>
          <div className="mt-16 flex flex-wrap gap-12">
            {skills.map((skill) => (
              <div className="block-container w-20 h-20">
                <div className="btn-back rounded-xl" />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    className="w-1/2 h-1/2 object-contain"
                    src={skill.imageUrl}
                    alt={skill.name}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* exp */}
        <div className="py-16">
          <h1 className="subhead-text">My coding journey</h1>
          <div className="mt-5 flex flex-col gap-3 text-slate-500">
            <p></p>
          </div>
          <div className="mt-12 flex">
            <VerticalTimeline>
              {experiences.map((experience) => (
                <VerticalTimelineElement
                  key={experience.company_name}
                  date={experience.date}
                  icon={
                    <div className="flex justify-center items-center w-full h-full">
                      <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className="w-[60%] h-[60%] object-contain"
                      />
                    </div>
                  }
                  iconStyle={{ background: experience.iconBg }}
                  contentStyle={{
                    borderBottom: "8px",
                    borderStyle: "solid",
                    borderBottomColor: experience.iconBg,
                    boxShadow: "none",
                  }}
                >
                  <div>
                    <h3 className="text-black text-xl font-poppins font-semibold">
                      {experience.title}
                    </h3>
                    <p className="text-black-500 text-xl font-medium font-base m-[0]">
                      {experience.company_name}
                    </p>
                  </div>

                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {experience.points.map((point, index) => (
                      <li
                        key={`experience-point-${index}`}
                        className="text-black-500/50 font-normal text-sm"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
        {/* contact */}
        <hr className="border-slate-200" />
        <CTA />
        <hr className="border-slate-20 mt-12 max-w-5xl mx-auto " />
        <Footer />
      </section>
    </>
  );
}

export default About;
