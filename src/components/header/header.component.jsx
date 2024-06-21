import React from "react";
import "./header.styles.css";

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <div className="user-logo">
        <img src={`${process.env.PUBLIC_URL}/user.png`} alt="User Logo" />
        <span>Admin</span>
        <img src={`${process.env.PUBLIC_URL}/dropdown.png`} alt="Dashboard" className="dropdown" />
      </div>
    </header>
  );
};

export default Header;
