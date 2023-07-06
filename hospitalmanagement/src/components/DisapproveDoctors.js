import React, { useState } from 'react';
import './DisapproveDoctors.css';
import { Link } from 'react-router-dom';
const DisapproveDoctor = () => {
  const [doctorId, setDoctorId] = useState('');
  const [message, setMessage] = useState('');

  const handleDisapproveDoctor = async () => {
    try {
      const disapproveUrl = `http://localhost:5222/api/User/DisapproveDoctor/api/Doctor/DisapproveDoctor?doctorId=${doctorId}`;
      const response = await fetch(disapproveUrl, {
        method: 'POST',
      });

      if (response.ok) {
        alert(`The Doctor has been disapproved.`);
        setDoctorId('');
        setMessage('');
      } else {
        const errorData = await response.json();
        setMessage(`Error disapproving doctor: ${errorData}`);
      }
    } catch (error) {
      setMessage(`Error disapproving doctor: ${error}`);
    }
  };

  return (
    <div className='disapprovedocWhole'>
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
    <div className="disapprove-doctor-container">
      <h2>Disapprove Doctor</h2>
      <input
        type="number"
        className='disapproveInput'
        placeholder="Enter Doctor ID"
        value={doctorId}
        onChange={(e) => setDoctorId(e.target.value)}
      />
      <button onClick={handleDisapproveDoctor}>Disapprove Doctor</button>
      {message && <p>{message}</p>}
    </div></div>
  );
};

export default DisapproveDoctor;
