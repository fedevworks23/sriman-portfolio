// Navbar.tsx
import { useState } from "react";
import DarkModeToggler from "../DarkModeToggler/DarkModeToggler";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="z-10 shadow-md w-full">
      <div className="flex justify-between items-center mx-auto px-4 h-16">
        <div className="font-bold text-xl">Logo</div>

        {/* Desktop Links */}
        <ul className="hidden md:flex">
          <li>
            <a href="#" className="">
              About Me
            </a>
          </li>
          <li>
            <a href="#" className="">
              Skill
            </a>
          </li>
          <li>
            <a href="#" className="">
              Contact
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden focus:outline-none text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        <div>
          <DarkModeToggler />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden space-y-2 shadow px-4 pt-2 pb-4">
          <li>
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
          </li>
        </ul>
      )}
    </nav>
  );
}
