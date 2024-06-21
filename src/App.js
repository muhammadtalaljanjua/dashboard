import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./components/header/header.component";
import Sidebar from "./components/sidebar/sidebar.component";
import StaffManagement from "./components/staff-management/staff-management.component";
import Dashboard from "./components/dashboard/dashboard.component";
import StaffDocumentListing from "./components/staff-management/staff-document-listing/staff-document-listing.component";
import StaffListing from "./components/staff-management/staff-listing/staff-listing.component";
import Masters from "./components/masters/masters.component";
import DepartmentMaster from "./components/masters/department-master/department-master.component";
import PositionMaster from "./components/masters/position-master/position-master.component";
import BranchMaster from "./components/masters/branch-master/branch-master.component";
import AddBranchMaster from "./components/masters/branch-master/add-branch-master/add-branch-master.component";
import BankMaster from "./components/masters/bank-master/bank-master.component";

function App() {
  const location = useLocation();
  const [title, setTitle] = useState("");

  const routes = [
    { path: "/", element: <Dashboard />, title: "Dashboard" },
    { path: "/dashboard", element: <Dashboard />, title: "Dashboard" },
    { path: "/staff-management", element: <StaffManagement />, title: "Staff Management" },
    { path: "/staff-listing", element: <StaffListing />, title: "Staff Listing" },
    {
      path: "/staff-document-listing",
      element: <StaffDocumentListing />,
      title: "Staff Document Listing",
    },
    { path: "/masters", element: <Masters />, title: "Masters" },
    { path: "/department-master", element: <DepartmentMaster />, title: "Department Master" },
    { path: "/position-master", element: <PositionMaster />, title: "Position Master" },
    { path: "/branch-master", element: <BranchMaster />, title: "Branch Master" },
    { path: "/add-branch-master", element: <AddBranchMaster />, title: "Add Branch" },
    { path: "/bank-master", element: <BankMaster />, title: "Bank Master" },
  ];

  useEffect(() => {
    const currentRoute = routes.find((route) => route.path === location.pathname);
    if (currentRoute) {
      setTitle(currentRoute.title);
    } else {
      setTitle("Page Not Found");
    }
  }, [location.pathname]);

  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header title={title} />
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
