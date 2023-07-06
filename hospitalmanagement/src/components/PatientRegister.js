import React, { useState } from 'react';
import './PatientRegister.css';
import { useNavigate } from 'react-router-dom';

function PatientRegister() {
  const navigate = useNavigate();
  const [patient, setPatient] = useState({
    patientId: 0,
    patientName: '',
    dob: '',
    age: '',
    affliction: '',
    email: '',
    gender: '',
    phoneNo: '',
    passwordClear: '',
  });

  const [errors, setErrors] = useState({});

  const registers = () => {
    // Perform validation
    const validationErrors = {};
    if (!patient.patientName) {
      validationErrors.patientName = 'Patient name is required';
    }
    if (!patient.dob) {
      validationErrors.dob = 'Date of Birth is required';
    }
    if (!patient.age) {
      validationErrors.age = 'Age is required';
    }
    if (!patient.affliction) {
      validationErrors.affliction = 'Affliction is required';
    }
    if (!patient.email) {
      validationErrors.email = 'Email is required';
    }
    if (!patient.gender) {
      validationErrors.gender = 'Gender is required';
    }
    if (!patient.phoneNo) {
      validationErrors.phoneNo = 'Phone Number is required';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Reset validation errors
    setErrors({});

    // Continue with registration logic
    fetch('http://localhost:5222/api/User/RegisterPatient/Patient', {
      method: 'POST',
      headers: {
        accept: 'text/plain',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...patient }),
    })
      .then(async (data) => {
        const myData = await data.json();
        console.log(myData);
        alert(`Registered Successfully`);
        navigate('/patientdashboard');
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
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  return (
    <div className="patregcontainer">
      <div className="forms-container">
        <h1>Patient Register</h1>
        <br />
        <div className="inputrowpatreg">
          <div className="input-container">
            <label className="label-text">Patient Name:</label>
            <input
              type="text"
              name="patientName"
              id="patientName"
              value={patient.patientName}
              onChange={handleChange}
              className="reFor"
            />
            {errors.patientName && <span className="error-message">{errors.patientName}</span>}
          </div>
          <div className="input-container">
            <label className="label-text">Date of Birth:</label>
            <input
              type="date"
              name="dob"
              id="dob"
              value={patient.dob}
              onChange={handleChange}
              className="reFor"
            />
            {errors.dob && <span className="error-message">{errors.dob}</span>}
          </div>
          <div className="input-container">
            <label className="label-text">Age:</label>
            <input
              type="number"
              name="age"
              id="age"
              value={patient.age}
              onChange={handleChange}
              className="reFor"
            />
            {errors.age && <span className="error-message">{errors.age}</span>}
          </div>
          <div className="input-container">
            <label className="label-text">Affliction:</label>
            <input
              type="text"
              name="affliction"
              id="affliction"
              value={patient.affliction}
              onChange={handleChange}
              className="reFor"
            />
            {errors.affliction && <span className="error-message">{errors.affliction}</span>}
          </div>
          <div className="input-container">
            <label className="label-text">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={patient.email}
              onChange={handleChange}
              className="reFor"
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
          <div className="input-container">
            <label className="label-text">Gender:</label>
            <input
              type="text"
              name="gender"
              id="gender"
              value={patient.gender}
              onChange={handleChange}
              className="reFor"
            />
            {errors.gender && <span className="error-message">{errors.gender}</span>}
          </div>
          <div className="input-container">
            <label className="label-text">Phone Number:</label>
            <input
              type="tel"
              name="phoneNo"
              id="phoneNo"
              value={patient.phoneNo}
              onChange={handleChange}
              className="reFor"
            />
            {errors.phoneNo && <span className="error-message">{errors.phoneNo}</span>}
          </div>
        </div>
        <div className="button-container">
          <button type="submit" className="submit-button" onClick={registers}>
            Register
          </button>
          <button type="button" className="cancel-button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default PatientRegister;
