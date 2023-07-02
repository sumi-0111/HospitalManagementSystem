import React, { useState, useEffect } from 'react';
import './DoctorsDelete.css';

const DoctorsDelete = () => {
  const [doctorId, setDoctorId] = useState('');
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await fetch("http://localhost:5222/api/User/GetAll", {
        method: "GET",
        headers: {
          "accept": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setDoctors(data);
      } else {
        console.log("Error:", response.status);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleDoctorIdChange = (e) => {
    setDoctorId(e.target.value);
  };

  const handleDeleteDoctor = async () => {
    try {
      const response = await fetch(`http://localhost:5222/api/User/DeleteDoctor?doctorID=${doctorId}`, {
        method: 'DELETE',
        headers: {
          'accept': 'text/plain',
        },
      });

      if (response.ok) {
        const message = await response.text();
        console.log(message);
        // Display success message or update the doctor list
        window.alert('Doctor deleted successfully');
        fetchDoctors(); // Fetch updated list of doctors
      } else {
        console.log('Error:', response.status);
        // Handle error message
      }
    } catch (error) {
      console.log('Error:', error);
      // Handle error message
    }
  };

  return (
    <div className='bodydeldoc'>
      <div className="doctors-delete-container">
        <br></br>
        <h1 className="deldoc">Delete Doctor</h1>
        <input type="text" className="deldocinpu" placeholder="Doctor ID" value={doctorId} onChange={handleDoctorIdChange} />
        <br />
        <button className="deldocbut" onClick={handleDeleteDoctor}>Delete</button>
        <br />
        <div className='tabWholedoc'>
        <table id="table">
          <thead>
            <tr>
              <th>Doctor Id</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Age</th>
              <th>DOB</th>
              <th>Email</th>
              <th>Phone No</th>
              <th>Specialization</th>
              <th>Experience</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor) => (
              <tr key={doctor.doctorId}>
                <td>{doctor.doctorId}</td>
                <td>{doctor.doctorName}</td>
                <td>{doctor.gender}</td>
                <td>{doctor.age}</td>
                <td>{doctor.dob}</td>
                <td>{doctor.email}</td>
                <td>{doctor.phoneNo}</td>
                <td>{doctor.specialization}</td>
                <td>{doctor.experience}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default DoctorsDelete;
