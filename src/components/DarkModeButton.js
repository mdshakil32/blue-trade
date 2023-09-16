"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import DarkModeToggle from "react-dark-mode-toggle";

const DarkModeButton = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(theme === "dark" ? true : false);
  useEffect(() => {
    isDarkMode ? setTheme("dark") : setTheme("light");
  }, [isDarkMode]);
  return (
    <div className="">
      <DarkModeToggle onChange={setIsDarkMode} checked={isDarkMode} size={70} />
    </div>
  );
};

export default DarkModeButton;
