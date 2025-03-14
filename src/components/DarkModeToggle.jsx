import React from "react";
import "./../styles/DarkMode.css";

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
    return (
        <button className="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "Light Mode 🌞" : "Dark Mode 🌙"}
        </button>
    );
};

export default DarkModeToggle;
