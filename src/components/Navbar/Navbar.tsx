import { useState } from "react";
import DarkModeToggler from "../DarkModeToggler/DarkModeToggler";

function Navbar() {
  return (
    <>
      <div className="flex justify-center items-center my-3 py-4 border-b-1">
        <div>Navbar</div>

        <ul className="flex">
          <li>About Me</li>
          <li>Skill</li>
        </ul>
        <DarkModeToggler />
      </div>
    </>
  );
}

export default Navbar;
