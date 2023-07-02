import React, { useState } from 'react';
import './SignIn.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

// function SignIn() {
//   const navigate = useNavigate();

//   var [Login, setLogin] = useState({
//     userId: 0,
//     password: "",
//     role: "",
//     token: "",
//   });

//   const login = async () => {
//     if (!Login.userId || !Login.password) {
//       alert('Please enter your UserId and Password');
//       return;
//     }
//     try {
//       const response = await fetch("http://localhost:5222/api/User/Login", {
//         method: "POST",
//         headers: {
//           accept: "text/plain",
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ ...Login }),
//       });

//       if (response.ok) {
//         alert('You are logged in Successfully');
//         const vdata = await response.json();
//         console.log(vdata);
//         localStorage.setItem('token', response.token);

//         if (Login.role === "admin") {
//           navigate('/adminpage');
//         } else if (Login.role === "patient") {
//           navigate('/patientpage');
//         } else if (Login.role === "doctor") {
//           navigate('/doctorpage');
//         }
//       } else {
//         const myData = await response.json();
//         if (response.status === 401) {
//           alert(`Unauthorized: ${myData.message}`);
//         } else {
//           alert(`Login failed: ${myData.message}`);
//         }
//       }
//     } catch (err) {
//       console.log(err);
//       alert('Check your details');
//     }
//   };
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
        } else if (myData.role === "Doctor") {
          navigate("/doctordashboard");
        } else if (myData.role === "Admin") {
          navigate("/adminpage");
        } else {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err.error);
      });
  };


  return (
    <div className='whole'>
      <div className="overlay">
        <div className='form'>
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
              {/* <span>
              <i className="fa fa-eye" aria-hidden="true" type="button" id="eye"></i>
            </span> */}
              <br />
              <button className="log-in" onClick={login}>Log In</button>
            </div><br></br><br></br>
            <div className="other">
              <button className="btn submits frgt-pass">Forgot Password</button>
              <button className="btn submits sign-up" >
                <Link to="/registerhome">Sign In</Link>
                {/* <Link to= "'>Sign Up</Link> */}
                <i className="fa fa-user-plus" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
        {/* </form> */}
      </div>
    </div>
  );
}

export default SignIn;
