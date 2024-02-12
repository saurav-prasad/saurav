import React from "react";
import { Link } from "react-router-dom";
import { github, linkedin } from "../assets/icons";
import gmail from "../assets/icons/gmail.svg";

function Footer() {
  const icons = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/saurav-prasadd/",
      img: linkedin,
    },
    {
      name: "GitHub",
      link: "https://github.com/saurav-prasad",
      img: github,
    },
  ];
  return (
    <>
      <footer className="rounded-lg mt-5 max-w-5xl mx-auto">
        <div className="w-full mx-auto max-w-screen-xl pt-4 px-2 flex items-center justify-between gap-3 flex-wrap">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 flex ">
            © 2023&nbsp;<p className="hover:underline">Saurav Prasad</p>. All
            Rights Reserved.
          </span>
          <div className="flex items-center justify-center flex-wrap gap-4">
            <Link to="mailto:sauravprasad2050@gmail.com">
              <img className="w-7 h-7 rounded" src={gmail} alt="gmail" />
            </Link>
            {icons.map((icon, index) => (
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
