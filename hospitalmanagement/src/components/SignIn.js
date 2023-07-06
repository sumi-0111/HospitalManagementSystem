import React, { useState } from 'react';
import './SignIn.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function SignIn() {
  const navigate = useNavigate();
  var [Login, setLogin] = useState({
    userId: 0,
    password: "",
  });
  var login = () => {
    fetch("http://localhost:5222/api/User/Login", {
      method: "POST",
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...Login }),
    })
      .then(async (data) => {
        var myData = await data.json();
        localStorage.setItem("userId", myData.userId); // Modify the property name here
        localStorage.setItem("role", myData.role);
        localStorage.setItem("token", myData.token);
        console.log(myData);
        if (myData.role === "Patient") {
          localStorage.setItem("userId", myData.userId); 
          navigate("/patientdashboard");
          alert("Login Successfully");
        } else if (myData.role === "Doctor") {
          // localStorage.setItem("doctorId",myData.doctorId);
          localStorage.setItem("status",myData.status);
          navigate("/doctordashboard");
          alert("Login Successfully");

        } else if (myData.role === "Admin") {
          navigate("/adminpage");
          alert("Login Successfully");

        } else {
          navigate("/signIn");
          throw new Error("Invalid Credentials");
        }
      })
      .catch((err) => {
        console.log(err.error);
      });
  };
  var logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("role");
    navigate("/"); 
  };
  


  return (
   
    <div className='whole '>
      <div className="overlay">
        <div className='formsignn'>
          <div className="con">
            <header className="head-form">
              <h2>Log In</h2>
              <p>Login here using your User Id and password</p>
            </header>
            <br />
            <div className="field-set">
              <span className="input-item">
                <i className="fa fa-user-circle"></i>
              </span>
              <input
                className="form-input"
                id="txt-input"
                type="number"
                placeholder="UserId"
                required
                onChange={(event) => {
                  setLogin({
                    ...Login,
                    "userId": event.target.value,
                  });
                }}
              />
              <br />
              <span className="input-item">
                <i className="fa fa-key"></i>
              </span>
              <input
                className="form-input"
                type="text"
                placeholder="Password"
                id="pwd"
                name="password"
                required
                onChange={(event) => {
                  setLogin({
                    ...Login,
                    "password": event.target.value,
                  });
                }}
              />
              <br />
              <button className="log-in" onClick={login}>Log In</button>
            </div><br></br><br></br>
            <div className="other">
              <button className="btn submits frgt-pass" onClick={logout}>Log Out</button>
              <button className="btn submits sign-up" >
                <Link to="/registerhome">Sign Up</Link>
                <i className="fa fa-user-plus" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default SignIn;
