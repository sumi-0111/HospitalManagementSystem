import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  return (
    // <div>
    <div className='body'>
      <link rel="stylesheet" href="./fontawesome-free-5.15.3-web/css/all.min.css" />
      <nav>
        <div className="container">
          <img src="https://i.postimg.cc/K8TZQwpJ/tutorial-logo.png" alt="Logo" />
          <input type="checkbox" id="showNav" />
          <label htmlFor="showNav" id="toggleNav"><i className="fas fa-bars"></i></label>
          <ul>
            <li><a href="#" className="active">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </nav>

      <section>
        <div className="container">
          <h1>Aurora</h1>
          <h3>Health Care</h3>

          <p>"Empowering lives through care and cure, With expertise, we'll help you endure.From diagnosis to healing's embrace,Doctors, the guardians of grace.
            Your health, our unwavering chase."</p>

          <Link to ="/signIn">Sign In</Link>
          <Link to="#video">Learn more...</Link>
        </div>
      </section>
      <section  id="video">

        <p>ytrhfttrdsgvxgre\dc</p>
      {/* <video controls>
        <source src='https://player.vimeo.com/external/406124434.sd.mp4?s=61d62ed8a2d15a7b2f65c0a0467c7024f6aa1a54&profile_id=164&oauth2_token_id=57447761' type="video/mp4" ></source>
      </video> */}
      </section>
      </div>
    // {/* </div> */}
  
  );
}

export default LandingPage;
