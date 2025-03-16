import React from "react";
import { useTheme } from "../context/ThemeContext";
import "../styles/DarkMode.css";

const DarkModeToggle = () => {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <button className="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "🌞 Modo Claro" : "🌙 Modo Oscuro"}
    </button>
  );
};

export default DarkModeToggle;
