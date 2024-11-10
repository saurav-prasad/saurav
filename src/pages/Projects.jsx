import React from "react";
import { projects } from "../constants";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function Projects() {
  return (
    <>
      {" "}
      <section className="max-container">
        {/* intro */}
        <h1 className="head-text">
          My
          <span className="blue-gradient_text font-semibold drop-shadow">
            {" "}
            Projects
          </span>
          🚀
        </h1>

        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I've worked on numerous projects during my learning journey, and
            these are some of my top creations. Feel free to explore and use
            these applications.
          </p>{" "}
        </div>

        <div className="flex flex-wrap gap-16 my-20">
          {projects.map((project) => (
            <div className="lg:w-[400px] w-full" key={project.name}>
              <div className="block-container w-12 h-12">
                <div className={`btn-back rounded-xl ${project.theme}`} />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={project.iconUrl}
                    alt={"project icon"}
                    className="w-1/2 h-1/2 object-contain "
                  />
                </div>
              </div>
              <div className="mt-5 flex flex-col">
                <h4 className="text-2xl font-poppins font-semibold">
                  {project.name}
                </h4>
                <p className="text-slate-500">{project.description}</p>
                <div className="flex items-center gap-4">
                  {project.link && (
                    <div className="mt-5 flex items-center gap-2 font-poppins">
                      <Link
                        to={project.link}
                        target="_blank"
                        rel="noopener noreferre"
                        className=" font-semibold text-blue-600"
                      >
                        Live Link
                      </Link>
                      <img
                        className="w-4 h-4 object-contain"
                        src={arrow}
                        alt=""
                      />
                    </div>
                  )}
                  <div className="mt-5 flex items-center gap-2 font-poppins">
                    <Link
                      to={project?.repo}
                      target="_blank"
                      rel="noopener noreferre"
                      className=" font-semibold text-blue-600"
                    >
                      Repo Link
                    </Link>
                    <img
                      className="w-4 h-4 object-contain"
                      src={arrow}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="pb-4">
        <hr className="hrBorderColor mt-12 max-w-5xl mx-auto " />
        <CTA />
        <hr className="hrBorderColor mt-10 max-w-5xl mx-auto " />
        <Footer />
      </div>
    </>
  );
}

export default Projects;
