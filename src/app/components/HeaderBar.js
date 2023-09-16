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
            className="text-2xl cursor-pointer text-gray-600 dark:text-gray-400 hover:text-blue-500 hover:dark:text-blue-500"
            onClick={toggleDarkMode}
          />
        </li>
        <li>
          <a
            download=""
            href="Omar-Naeem-CV.pdf"
            className="bg-gradient-to-t lg:bg-gradient-to-r from-blue-500 to-violet-500 px-4 py-2 rounded-xl ml-8 text-white"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
