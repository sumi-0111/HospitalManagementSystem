import React from 'react';
import './RegisterHome.css';
import { Link } from 'react-router-dom';

function RegisterHome() {
  return (
    <div className="contain">
      <h1 className='welreg'>Welcome to the Registration Page</h1>
      <div className="button-contain">
        <button className="registerdocpat-button">
            <Link to='/docregistration'>Register Doctor</Link>
            </button>
        <button className="registerdocpat-button">
            <Link to='/patregistration'>Register Patient</Link>
            </button>
      </div>
    </div>
  );
}

export default RegisterHome;

