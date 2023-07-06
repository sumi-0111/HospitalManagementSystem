import React, { useEffect, useState } from 'react';
import './DoctorsApprove.css';
import { Link } from 'react-router-dom';
const DoctorsApprove = () => {
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

  const handleApprove = async (doctorId) => {
    try {
      const response = await fetch(`http://localhost:5222/api/User/ApproveRequest/ApproveRequest?doctorId=${doctorId}`, {
        method: "POST",
        headers: {
          "accept": "application/json",
        },
      });

      if (response.ok) {
        fetchDoctors();
      } else {
        console.log("Error:", response.status);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const pendingDoctors = doctors.filter(doctor => !doctor.status);

  return (
    <div className="doctors-approve-container">

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
      </nav><br></br><br></br><br></br>
      <h1>Doctors Approval</h1>
      <br />
      <table className='docapptab'>
        <thead className='docappthead'>
          <tr className='appdoctr'>
            <th className='appdocth'>Doctor Id</th>
            <th className='appdocth'>Name</th>
            <th className='appdocth'>Status</th>
            <th className='appdocth'>Action</th>
          </tr>
        </thead>
        <tbody>
          {pendingDoctors.map((doctor) => (
            <tr key={doctor.doctorId}>
              <td className='appdoctd'>{doctor.doctorId}</td>
              <td className='appdoctd'>{doctor.doctorName}</td>
              <td className='appdoctd'>{doctor.status ? "Approved" : "Pending"}</td>
              <td className='appdoctd'>
                {!doctor.status && (
                  <button className='appdocbbuto' onClick={() => handleApprove(doctor.doctorId)}>
                    Approve
                  </button>
                )}   
              </td>
            </tr> 
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorsApprove;