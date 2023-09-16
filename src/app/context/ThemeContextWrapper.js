"use client";
import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext({
  dark: true,
  toggleDarkMode: () => {},
});

export default function ThemeContextWrapper(props) {
  const { children } = props;
  const [dark, setDark] = useState(true);
  useEffect(() => {
    const dark = localStorage.getItem("darkMode");
    setDark(JSON.parse(dark));
  }, []);
  const toggleDarkMode = () => {
    setDark(!dark);
    localStorage.setItem("darkMode", !dark);
  };
  return (
    <ThemeContext.Provider value={{ dark, toggleDarkMode }}>
      <div className={`overflow-hidden h-full ${dark ? " dark" : ""}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
