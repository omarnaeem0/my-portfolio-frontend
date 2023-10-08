"use client";
import { useContext } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { ThemeContext } from "../context/ThemeContextWrapper";

export default function NavBar() {
  const { toggleDarkMode } = useContext(ThemeContext);
  return (
    <nav className="xl:px-20 py-10 mb-12 flex justify-between">
      <h1 className="text-2xl font-burtons text-gray-600 dark:text-gray-400"></h1>
      <ul className="flex items-center">
        <li>
          <BsFillMoonStarsFill
            data-tooltip-target="DarkMode"
            className="text-2xl cursor-pointer text-gray-600 dark:text-gray-400 hover:text-blue-500 hover:dark:text-blue-500 focus:outline-none"
            onClick={toggleDarkMode}
          />
          <div
            id="DarkMode"
            role="tooltip"
            data-popper-placement="bottom"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-gray-900 dark:text-white bg-white dark:bg-gray-700 rounded-xl shadow-sm opacity-0 tooltip"
          >
            Toggle dark mode
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        </li>
        <li>
          <a
            download=""
            href="Omar-Naeem-CV.pdf"
            data-tooltip-target="Resume"
            className="bg-blue-500 hover:bg-blue-400 transition-all duration-500 px-4 py-2 rounded-xl ml-8 text-white"
          >
            Resume
          </a>
          <div
            id="Resume"
            role="tooltip"
            data-popper-placement="bottom"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-gray-900 dark:text-white bg-white dark:bg-gray-700 rounded-xl shadow-sm opacity-0 tooltip"
          >
            Download Resume
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        </li>
      </ul>
    </nav>
  );
}
