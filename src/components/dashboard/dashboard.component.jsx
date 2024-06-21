import React from "react";
import "./dashboard.styles.css";
import { toast } from "react-toastify";

const Dashboard = () => {
  const getToken = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      username: "admin",
      password: "Adm123456n",
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://97.74.87.98:7852/v1/api/token", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.document.AccessToken) {
          const accessToken = data.document.AccessToken;
          sessionStorage.setItem("token", accessToken);
          toast.success("Token Generated");
          console.log("Token stored in session storage");
        } else {
          console.log("Failed to get token", data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="container-box">
      <h1>Welcome To Dashboard</h1>
      <button className="auth-button mt-3" onClick={getToken}>
        Authorize
      </button>
    </div>
  );
};

export default Dashboard;
