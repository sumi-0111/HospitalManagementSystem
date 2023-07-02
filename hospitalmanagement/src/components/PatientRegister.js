import React, { useState } from 'react';
import './PatientRegister.css';

function PatientRegister() {
  const [patient, setPatient] = useState({
    patientId: 0,
    patientName: "",
    dob: "",
    age: "",
    affliction: "",
    email: "",
    gender: "",
    phoneNo: "",
    passwordClear: ""
  });
//   const [showSuccessMessage, setShowSuccessMessage] = useState(false);


  const registers = () => {
    fetch("http://localhost:5222/api/User/RegisterPatient/Patient", {
      method: "POST",
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...patient }),
    })
      .then(async (data) => {
        const myData = await data.json();
        console.log(myData);
        alert("Registered Successfully");
        // setShowSuccessMessage(true);

      })
      .catch((err) => {
        console.log(err.error);
      });
  };

  const handleCancel = () => {
    // Clear form data
    setPatient({
      patientName: '',
      dob: '',
      age: '',
      affliction: '',
      email: '',
      gender: '',
      phoneNo: '',
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPatient((prevPatient) => ({ ...prevPatient, [name]: value }));
  };

  return (
    <div className="patregcontainer">
      <div className="forms-container">
        <h1>Patient Registration Form</h1>
        <div className="input-container">
          <label className="label-text">Patient Name:</label>
          <input
            type="text"
            name="patientName"
            value={patient.patientName}
            onChange={handleChange}
            className="reFor"
          />
        </div>
        <div className="input-container">
          <label className="label-text">Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={patient.dob}
            onChange={handleChange}
            className="reFor"
          />
        </div>
        <div className="input-container">
          <label className="label-text">Age:</label>
          <input
            type="number"
            name="age"
            value={patient.age}
            onChange={handleChange}
            className="reFor"
          />
        </div>
        <div className="input-container">
          <label className="label-text">Affliction:</label>
          <input
            type="text"
            name="affliction"
            value={patient.affliction}
            onChange={handleChange}
            className="reFor"
          />
        </div>
        <div className="input-container">
          <label className="label-text">Email:</label>
          <input
            type="email"
            name="email"
            value={patient.email}
            onChange={handleChange}
            className="reFor"
          />
        </div>
        <div className="input-container">
          <label className="label-text">Gender:</label>
          <input
            type="text"
            name="gender"
            value={patient.gender}
            onChange={handleChange}
            className="reFor"
          />
        </div>
        <div className="input-container">
          <label className="label-text">Phone Number:</label>
          <input
            type="tel"
            name="phoneNo"
            value={patient.phoneNo}
            onChange={handleChange}
            className="reFor"
          />
        </div>
        <div className="button-container">
          <button type="submit" className="submit-button" onClick={registers}>
            Submit
          </button>
          <button type="button" className="cancel-button"onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
      {/* {showSuccessMessage && (
        <div className="popup">
          <p>Registered successfully!</p>
        </div>
      )} */}
    </div>
  );
}

export default PatientRegister;