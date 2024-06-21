import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Select from "react-select";
import { countries } from "countries-list";
import "./add-branch-master.styles.css";

const AddBranchMaster = () => {
  const [BranchID, setBranchID] = useState("");
  const [BranchName, setBranchName] = useState("");
  const [BranchTelePhoneNumber, setBranchTelePhoneNumber] = useState("");
  const [BranchAddress, setBranchAddress] = useState("");
  const [BranchCountry, setBranchCountry] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const branchIDValidation = (e) => {
    const value = e.target.value;
    setBranchID(value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      BranchID: value.trim() !== "" ? "" : "Branch ID is required",
    }));
  };

  const branchNameValidation = (e) => {
    const value = e.target.value;
    setBranchName(value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      BranchName: value.trim() !== "" ? "" : "Branch Name is required",
    }));
  };

  const branchTelephoneValidation = (e) => {
    const value = e.target.value;
    if (/^\d{0,7}$/.test(value)) {
      setBranchTelePhoneNumber(value);
      setErrors((prevErrors) => ({ ...prevErrors, BranchTelePhoneNumber: "" }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        BranchTelePhoneNumber: "Only 7 digits are allowed",
      }));
    }
  };

  const branchCountryValidation = (selectedOption) => {
    setBranchCountry(selectedOption.value);
    setErrors((prevErrors) => ({ ...prevErrors, BranchCountry: "" }));
  };

  const branchAddressValidation = (e) => {
    const value = e.target.value;
    setBranchAddress(value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      BranchAddress: value.trim() !== "" ? "" : "Branch Address is required",
    }));
  };

  const countryOptions = Object.values(countries).map((country) => ({
    value: country.name,
    label: country.name,
  }));

  const postData = (event) => {
    event.preventDefault();
    const timestamp = new Date().toISOString();

    const formData = {
      BranchID,
      BranchName,
      BranchTelePhoneNumber,
      BranchAddress,
      BranchCountry,
      createdOn: timestamp,
      StatusCode: "active",
    };

    let formErrors = {};
    if (!BranchID) {
      formErrors.BranchID = "Branch ID is required";
    }
    if (!BranchName) {
      formErrors.BranchName = "Branch Name is required";
    }
    if (!BranchAddress) {
      formErrors.BranchAddress = "Branch Address is required";
    }
    if (BranchTelePhoneNumber.length !== 7) {
      formErrors.BranchTelePhoneNumber = "Only 7 digits are allowed";
    }
    if (!BranchCountry) {
      formErrors.BranchCountry = "Branch Country is required";
    }
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    fetch("http://97.74.87.98:7852/v1/api/Branches", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Data Added", data);
        toast.success("Branch Added Successfully");
        setBranchID("");
        setBranchName("");
        setBranchTelePhoneNumber("");
        setBranchCountry("");
        setBranchAddress("");
        navigate("/branch-master");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="form-container">
      <div className="mt-2">
        <Form className="row mt-2">
          <Form.Group className="mb-3 col-lg-6">
            <Form.Label>Branch ID</Form.Label>
            <Form.Control
              type="text"
              name="BranchID"
              value={BranchID}
              onChange={branchIDValidation}
              placeholder="Enter Branch ID"
            />
            {errors.BranchID && <p style={{ color: "red" }}>{errors.BranchID}</p>}
          </Form.Group>
          <Form.Group className="mb-3 col-lg-6">
            <Form.Label>Branch Name</Form.Label>
            <Form.Control
              type="text"
              name="BranchName"
              value={BranchName}
              onChange={branchNameValidation}
              placeholder="Enter Branch Name"
            />
            {errors.BranchName && <p style={{ color: "red" }}>{errors.BranchName}</p>}
          </Form.Group>
          <Form.Group className="mb-3 col-lg-6">
            <Form.Label>Branch Telephone Number</Form.Label>
            <Form.Control
              type="text"
              onChange={branchTelephoneValidation}
              value={BranchTelePhoneNumber}
              name="BranchTelePhoneNumber"
              placeholder="Enter Branch Telephone Number"
            />
            {errors.BranchTelePhoneNumber && (
              <p style={{ color: "red" }}>{errors.BranchTelePhoneNumber}</p>
            )}
          </Form.Group>
          <Form.Group className="mb-3 col-lg-6">
            <Form.Label>Branch Country</Form.Label>
            <Select
              options={countryOptions}
              onChange={branchCountryValidation}
              placeholder="Select Branch Country"
            />
            {errors.BranchCountry && <p style={{ color: "red" }}>{errors.BranchCountry}</p>}
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Branch Address</Form.Label>
            <Form.Control
              type="text"
              onChange={branchAddressValidation}
              value={BranchAddress}
              name="BranchAddress"
              placeholder="Enter Branch Address"
            />
            {errors.BranchAddress && <p style={{ color: "red" }}>{errors.BranchAddress}</p>}
          </Form.Group>
          <div className="d-flex justify-content-center">
            <button className="col-lg submit-button" type="submit" onClick={postData}>
              Save
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddBranchMaster;
