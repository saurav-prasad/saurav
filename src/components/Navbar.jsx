import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header className="header select-none">
        {/* logo */}
        <Link
          to="/"
          className="w-10 h-10 rounded-lg bg-white flex justify-center items-center font-bold shadow-md"
        >
          <p className="blue-gradient_text">SP</p>
        </Link>
        {/* navlinks */}
        <nav className="flex text-lg gap-7 font-medium">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-black-500"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-black-500"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-blue-500 sm:block hidden" : "text-black-500 sm:block hidden"
            }
          >
            Contact
          </NavLink>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
