import React, { useEffect, useState } from 'react';
import './DoctorsView.css';

const DoctorsView = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
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

    fetchDoctors();
  }, []);

  return (
    <div className="center-container">
     <br></br>
      <h1 className="list-head">Doctors Details</h1>
      <div id="loggedItems">

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
  );
};

export default DoctorsView;
