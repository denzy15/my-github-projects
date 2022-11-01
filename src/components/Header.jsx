import React from "react";
import Switch from "react-switch";

const Header = (props) => {
  const handleChange = (nextChecked) => {
    props.setChecked(nextChecked);
  };

  return (
    <header className="header">
      <h1 className="main-title">My GitHub projects</h1>
      <div className="theme-changer">
        <span>Change Theme</span>
        <Switch
          onChange={handleChange}
          checked={props.checked}
          offColor="#fafafa"
          onColor="#333341"
          onHandleColor="#1688f0"
          offHandleColor="#1688f0"
          uncheckedIcon={false}
          checkedIcon={false}
        />
      </div>
    </header>
  );
};

export default Header;
