// Navbar.tsx
import { useState } from "react";
import DarkModeToggler from "../DarkModeToggler/DarkModeToggler";
import { NavLink } from "react-router";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkList = [
    { to: "/", label: "Home" },
    { to: "/about-me", label: "About" },
    { to: "/tech-skills", label: "Tech Skills" },
    { to: "/works", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="z-10 w-full">
        <div className="hidden md:flex justify-center items-center h-16 text-gray-700 dark:text-white">
          {navLinkList.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive
                  ? "mx-4 font-bold border-b-2 text-lg"
                  : "mx-4 font-semibold text-lg"
              }
            >
              #{link.label}
            </NavLink>
          ))}

          {/* Dark Mode Toggler */}
          <div className="hidden md:flex items-center space-x-4">
            <DarkModeToggler />
          </div>
          {/* Hamburger */}
          <button
            className="md:hidden focus:outline-none text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden space-y-2 shadow px-4 pt-2 pb-4">
            {navLinkList.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    isActive
                      ? "block text-blue-500 font-bold"
                      : "block text-gray-700 hover:text-blue-500"
                  }
                  onClick={() => setIsOpen(false)}
                >
                  #{link.label}
                </NavLink>
              </li>
            ))}

            {/* Dark Mode Toggler */}
            {/* <li>
            <a href="#" className="block text-gray-700 hover:text-blue-500">
              About Me
            </a>
          </li>
          <li>
            <a href="#" className="block text-gray-700 hover:text-blue-500">
              Skill
            </a>
          </li>
          <li>
            <a href="#" className="block text-gray-700 hover:text-blue-500">
              Contact
            </a>
          </li> */}
          </ul>
        )}
      </nav>
    </>
  );
}
