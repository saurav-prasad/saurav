import React from "react";
import { Link } from "react-router-dom";
import { github, linkedin } from "../assets/icons";
import gmail from "../assets/icons/gmail.svg";
import resume from "../assets/doc/resume.pdf";
import { socialLink } from "../constants";
function Footer() {
  return (
    <>
      <footer className="rounded-lg mt-5 max-w-5xl mx-auto">
        <div className="w-full mx-auto max-w-screen-xl pt-4 px-2 flex items-center justify-between gap-3 flex-wrap">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 flex ">
            © 2024&nbsp;
            <Link target="_blank" to={"https://www.linkedin.com/in/saurav-prasadd/"} className="hover:underline text-gray-800 font-bold cursor-pointer">
              Saurav Prasad
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex items-center justify-center flex-wrap gap-5">
            <a
              className="text-gray-800"
              title="Download resume"
              href={resume}
              download="Saurav_resume.pdf"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-file-text"
              >
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                <path d="M10 9H8" />
                <path d="M16 13H8" />
                <path d="M16 17H8" />
              </svg>
            </a>
            {socialLink.map((icon, index) => (
              <Link
                key={`${icon.name}-${index}`}
                to={icon.link}
                target="_blank"
                rel="noopener noreferre"
              >
                <img
                  className="rounded w-6 h-6"
                  src={icon.img}
                  alt={icon.name}
                />
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
