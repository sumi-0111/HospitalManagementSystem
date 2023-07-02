import React, { useState } from 'react';
import './DoctorRegister.css';

function DoctorRegister() {
  const [doc, setDoc] = useState({
    doctorId:0,
    doctorName:"",
    gender:"",
    age:"",
    dob	:"",
    email:"",
    phoneNo	:"",
    specialization:"",
    experience:0
    
  });
//   const [showSuccessMessage, setShowSuccessMessage] = useState(false);


  const registersdoc = () => {
    fetch("http://localhost:5222/api/User/RegisterDoctor/Doctor", {
      method: "POST",
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...doc }),
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

  const handleCanceldoc = () => {
    // Clear form data
    setDoc({
        doctorId:0,
        doctorName:"",
        gender:"",
        age:0,
        dob	:"",
        email:"",
        phoneNo	:"",
        specialization:"",
        experience:0
    });
  };

  const handleChangedoc = (event) => {
    const { name, value } = event.target;
    setDoc((prevPatient) => ({ ...prevPatient, [name]: value }));
  };

  return (
    <div className="patregcontainer">
      <div className="formsdoccontainer">
        <h1 className='appdoch'> Doctor Registration </h1>
        <div className="inputdoccontainer">
          <label className="labeldoctext">Doctor Name:</label>
          <input
            type="text"
            name="doctorName"
            value={doc.doctorName}
            onChange={handleChangedoc}
            className="reFordoc"
          />
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
        </div>
        <div className="buttondoccontainer">
          <button type="submit" className="submitdocbutton" onClick={registersdoc}>
            Submit
          </button>
          <button type="button" className="canceldocbutton"onClick={handleCanceldoc}>
            Cancel
          </button>
        </div>
      </div>
     
    </div>
  );
}

export default DoctorRegister;