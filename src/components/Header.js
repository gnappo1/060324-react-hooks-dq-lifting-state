import React, { useState } from "react";
import Menu from "./Menu";

function Header() {
  //! useState is a hook that returns an array with two elements
  //! we use array destructuring to quickly create a variable for both array elements
  const [darkMode, setDarkMode] = useState(false);

  const handleChange = () => {
    setDarkMode(currentDarkModeValue => !currentDarkModeValue)
  }

  return (
    <div className={`ui fixed menu ${darkMode ? "inverted" : ""}`}>
      <div className="menu item">Fwitter</div>
      <div className="right menu">
        <Menu darkMode={darkMode} handleChange={handleChange} />
      </div>
    </div>
  );
}

export default Header;
