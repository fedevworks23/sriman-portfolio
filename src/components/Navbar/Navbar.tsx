import { useState } from "react";
import DarkModeToggler from "../DarkModeToggler/DarkModeToggler";

function Navbar({ darkMode }) {
  return (
    <>
      <div className="flex justify-center items-center my-4">
        <div>Navbar</div>

        <ul className="flex">
          <li>About Me</li>
          <li>Skill</li>
        </ul>
        <DarkModeToggler darkMode={darkMode} />
      </div>
    </>
  );
}

export default Navbar;
