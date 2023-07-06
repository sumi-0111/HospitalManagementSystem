import React, { useState } from 'react';
import './DoctorRegister.css';
import { useNavigate } from 'react-router-dom';

function DoctorRegister() {
  const navigate = useNavigate();

  const [doc, setDoc] = useState({
    doctorId: 0,
    doctorName: '',
    gender: '',
    age: '',
    dob: '',
    email: '',
    phoneNo: '',
    specialization: '',
    experience: 0,
  });

  const [errors, setErrors] = useState({});

  const registersdoc = () => {
    // Perform validation
    const validationErrors = {};
    if (!doc.doctorName) {
      validationErrors.doctorName = 'Doctor name is required';
    }
    if (!doc.dob) {
      validationErrors.dob = 'Date of Birth is required';
    }
    if (!doc.age) {
      validationErrors.age = 'Age is required';
    }
    if (!doc.specialization) {
      validationErrors.specialization = 'Specialization is required';
    }
    if (!doc.experience) {
      validationErrors.experience = 'Experience is required';
    }
    if (!doc.email) {
      validationErrors.email = 'Email is required';
    }
    if (!doc.gender) {
      validationErrors.gender = 'Gender is required';
    }
    if (!doc.phoneNo) {
      validationErrors.phoneNo = 'Phone Number is required';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Reset validation errors
    setErrors({});

    // Continue with registration logic
    fetch('http://localhost:5222/api/User/RegisterDoctor/Doctor', {
      method: 'POST',
      headers: {
        accept: 'text/plain',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...doc }),
    })
      .then(async (data) => {
        const myData = await data.json();
        console.log(myData);
        alert('Registered Successfully');
        navigate('/doctordashboard');
      })
      .catch((err) => {
        console.log(err.error);
      });
  };

  const handleCanceldoc = () => {
    // Clear form data
    setDoc({
      doctorId: 0,
      doctorName: '',
      gender: '',
      age: '',
      dob: '',
      email: '',
      phoneNo: '',
      specialization: '',
      experience: 0,
    });
    // Reset validation errors
    setErrors({});
  };

  const handleChangedoc = (event) => {
    const { name, value } = event.target;
    setDoc((prevDoc) => ({ ...prevDoc, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  return (
    <div className="patregcontainer">
      <div className="formsdoccontainer">
        <h1 className="appdoch">Doctor Registration</h1>
        <div className="inputdoccontainer">
          <label className="labeldoctext">Doctor Name:</label>
          <input
            type="text"
            name="doctorName"
            value={doc.doctorName}
            onChange={handleChangedoc}
            className="reFordoc"
          />
          {errors.doctorName && <span className="error-message">{errors.doctorName}</span>}
        </div>
        <div className="inputdoccontainer">
          <label className="labeldoctext">Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={doc.dob}
            onChange={handleChangedoc}
            className="reFordoc"
          />
          {errors.dob && <span className="error-message">{errors.dob}</span>}
        </div>
        <div className="inputdoccontainer">
          <label className="labeldoctext">Age:</label>
          <input
            type="number"
            name="age"
            value={doc.age}
            onChange={handleChangedoc}
            className="reFordoc"
          />
          {errors.age && <span className="error-message">{errors.age}</span>}
        </div>
        <div className="inputdoccontainer">
          <label className="labeldoctext">Specialization:</label>
          <input
            type="text"
            name="specialization"
            value={doc.specialization}
            onChange={handleChangedoc}
            className="reFordoc"
          />
          {errors.specialization && <span className="error-message">{errors.specialization}</span>}
        </div>
        <div className="inputdoccontainer">
          <label className="labeldoctext">Experience:</label>
          <input
            type="number"
            name="experience"
            value={doc.experience}
            onChange={handleChangedoc}
            className="reFordoc"
          />
          {errors.experience && <span className="error-message">{errors.experience}</span>}
        </div>
        <div className="inputdoccontainer">
          <label className="labeldoctext">Email:</label>
          <input
            type="email"
            name="email"
            value={doc.email}
            onChange={handleChangedoc}
            className="reFordoc"
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        <div className="inputdoccontainer">
          <label className="labeldoctext">Gender:</label>
          <input
            type="text"
            name="gender"
            value={doc.gender}
            onChange={handleChangedoc}
            className="reFordoc"
          />
          {errors.gender && <span className="error-message">{errors.gender}</span>}
        </div>
        <div className="inputdoccontainer">
          <label className="labeldoctext">Phone Number:</label>
          <input
            type="text"
            name="phoneNo"
            value={doc.phoneNo}
            onChange={handleChangedoc}
            className="reFordoc"
          />
          {errors.phoneNo && <span className="error-message">{errors.phoneNo}</span>}
        </div>
        <div className="buttondoccontainer">
          <button type="submit" className="submitdocbutton" onClick={registersdoc}>
            Submit
          </button>
          <button type="button" className="canceldocbutton" onClick={handleCanceldoc}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default DoctorRegister;
