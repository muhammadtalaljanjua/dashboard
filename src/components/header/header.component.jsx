import React from "react";
import "./header.styles.css";

const Header = () => {
  return (
    <header className="header">
      <h1>Staff Document Listing</h1>
      <div className="user-logo">
        <img src={`${process.env.PUBLIC_URL}/user.png`} alt="User Logo" />
        <span>Admin</span>
        <img src={`${process.env.PUBLIC_URL}/dropdown.png`} alt="Dashboard" className="dropdown" />
      </div>
    </header>
  );
};

export default Header;
