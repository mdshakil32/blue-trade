// ToggleButton.js
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
function ToggleButton() {
  const { systemTheme, theme, setTheme } = useTheme();

  const [isChecked, setIsChecked] = useState(theme === "dark" ? true : false);

  useEffect(() => {
    isChecked ? setTheme("dark") : setTheme("light");
  }, [isChecked]);

  //   const [isChecked, setIsChecked] = React.useState(false);

  const toggleSwitch = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={`toggle-switch ${isChecked ? "checked" : ""}`}>
      <input
        type="checkbox"
        id="toggle_checkbox"
        checked={isChecked}
        onChange={toggleSwitch}
      />
      <label htmlFor="toggle_checkbox" className="toggle-label">
        <div id="star">
          <div className="star" id="star-1">
            ★
          </div>
          <div className="star" id="star-2">
            ★
          </div>
        </div>
        <div id="moon"></div>
      </label>
    </div>
  );
}

export default ToggleButton;
