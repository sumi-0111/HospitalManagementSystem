import React, { useEffect, useState } from 'react';
import './PatientsView.css';
import { Link } from 'react-router-dom';
const PatientsView = () => {
  const [pattient, setpattient] = useState([]);

  useEffect(() => {
    const fetchpatients = async () => {
      try {
        const response = await fetch("http://localhost:5222/api/User/GetAllPatients", {
          method: "GET",
          headers: {
            "accept": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          setpattient(data);
        } else {
          console.log("Error:", response.status);
        }
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchpatients();
  }, []);

  return (
    <div className="centerpattient-container">
     <br></br>
     <nav className="navbar">
        <div className="navbar-logo"> 
        </div>
        <ul id="new-nav-items" className="navbar-menu">
        <li id="hitem" className="navbar-item" >
            <Link to="/approveddoctors" className='numtext'>Approved Doctors</Link>
          </li> 
        
          <li id="hitem" className="navbar-item">
            <Link to="/doctorsdelete" className='numtext'>Delete Doctors</Link>
          </li>
          <li id="hitem" className="navbar-item" >
            <Link to="/doctorsview" className='numtext'>View Doctors</Link>
          </li>
         
          <li id="hitem" className="navbar-item">
            <Link to="/pstientsview" className='numtext'>View Patients</Link>
          </li>
          <li id="hitem" className="navbar-item">
            <Link to="/doctorsapprove" className='numtext'>Approve Requests</Link>
          </li>
          <li id="hitem" className="navbar-item">
            <Link to="/disapprovedoctors" className='numtext'>Disapprove Doctor</Link>
          </li>
        </ul>
      </nav>
      <h1 className="listpattient-head">Patient Details</h1>
      <div id="loggedpattientItems">

      <table id="pattienttable">
        <thead>
          <tr>
            <th>Patient Id</th> 
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
            <th>DOB</th>
            <th>Email</th>
            <th>Phone No</th>
            <th>Affliction</th>
          </tr>
        </thead>
        <tbody>
          {pattient.map((patient) => (
            <tr key={patient.patientId}>
              <td>{patient.patientId}</td>
              <td>{patient.patientName}</td>
              <td>{patient.gender}</td>
              <td>{patient.age}</td>
              <td>{patient.dob}</td>
              <td>{patient.email}</td>
              <td>{patient.phoneNo}</td>
              <td>{patient.affliction}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default PatientsView;

