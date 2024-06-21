import React from "react";
import "./sidebar.styles.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="welcome">
        <img src={`${process.env.PUBLIC_URL}/user.png`} alt="Logo" />
        <span>
          Welcome <span className="bold">Admin</span>
        </span>
      </div>
      <nav>
        <ul>
          <li className="design">
            <img src={`${process.env.PUBLIC_URL}/dashboard.png`} alt="Dashboard" className="icon" />
            <NavLink className="main-item" to="/dashboard">
              Dashboard
            </NavLink>
          </li>
          <li className="design">
            <img src={`${process.env.PUBLIC_URL}/staff.png`} alt="Staff" className="icon" />
            <NavLink className="main-item" to="/staff-management">
              Staff Management
            </NavLink>
          </li>
          <li>
            <NavLink className="sub-item" to="/staff-listing">
              Staff Listing
            </NavLink>
          </li>
          <li>
            <NavLink className="sub-item" to="/staff-document-listing">
              Staff Document Listing
            </NavLink>
          </li>
          <li className="design">
            <img src={`${process.env.PUBLIC_URL}/staff.png`} alt="Staff" className="icon" />
            <NavLink className="main-item" to="/masters">
              Masters
            </NavLink>
          </li>
          <li>
            <NavLink className="sub-item" to="/department-master">
              Department Master
            </NavLink>
          </li>
          <li>
            <NavLink className="sub-item" to="/position-master">
              Position Master
            </NavLink>
          </li>
          <li>
            <NavLink className="sub-item" to="/branch-master">
              Branch Master
            </NavLink>
          </li>
          <li>
            <NavLink className="sub-item" to="/bank-master">
              Bank Master
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
