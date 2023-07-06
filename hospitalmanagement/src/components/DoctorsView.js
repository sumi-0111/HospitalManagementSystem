import React, { useEffect, useState } from 'react';
import './DoctorsView.css';
import { Link } from 'react-router-dom';
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
    <div className="centerdocview-container">
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
      <div>
      <h1 className="list-head">Doctors Details</h1></div>
      <div id="loggedItems">

      <table id="doviwtable">
        <thead>
          <tr className='docviewtr'>
            <th className='docviewth'>Doctor Id</th>
            <th className='docviewth'>Name</th>
            <th className='docviewth'>Gender</th>
            <th className='docviewth'>Age</th>
            <th className='docviewth'>DOB</th>
            <th className='docviewth'>Email</th>
            <th className='docviewth'>Phone No</th>
            <th className='docviewth'>Specialization</th>
            <th className='docviewth'>Experience</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.doctorId}className='docviewtr'>
              <td className='docviewtd'>{doctor.doctorId}</td>
              <td className='docviewtd'>{doctor.doctorName}</td>
              <td className='docviewtd'>{doctor.gender}</td>
              <td className='docviewtd'>{doctor.age}</td>
              <td className='docviewtd'>{doctor.dob}</td>
              <td className='docviewtd'>{doctor.email}</td>
              <td className='docviewtd'>{doctor.phoneNo}</td>
              <td className='docviewtd'>{doctor.specialization}</td>
              <td className='docviewtd'>{doctor.experience}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default DoctorsView;
