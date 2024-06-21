import React, { useEffect, useMemo, useState } from "react";
import { MaterialReactTable, useMaterialReactTable } from "material-react-table";
import { NavLink } from "react-router-dom";
import "./branch-master.styles.css";

const BranchMaster = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    const token = sessionStorage.getItem("token");

    if (token) {
      const requestOptions = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        redirect: "follow",
      };

      fetch("http://97.74.87.98:7852/v1/api/Branches", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          setData(data.document.records);
          console.log("API Data:", data.document.records);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      console.error("No token found");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: "BranchID",
        header: "Branch ID",
      },
      {
        accessorKey: "BranchName",
        header: "Branch Name",
      },
      {
        accessorKey: "BranchTelePhoneNumber",
        header: "Branch Telephone",
      },
      {
        accessorKey: "BranchAddress",
        header: "Branch Address",
      },
      {
        accessorKey: "BranchCountry",
        header: "Branch Country",
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
    enablePagination: true,
    enableStickyHeader: true,
    getRowId: (row) => row.BranchID,
    initialState: {
      rowPinning: {
        top: data.length > 0 ? [data[0].id] : [],
      },
    },
    muiTableContainerProps: {
      sx: {
        maxHeight: "400px",
      },
    },
  });

  return (
    <>
      <div className="btn-container">
        <NavLink to="/add-branch-master">
          <button className="add-button">Add Branch</button>
        </NavLink>
      </div>
      <div className="table-container">
        <MaterialReactTable table={table} />
      </div>
    </>
  );
};

export default BranchMaster;
