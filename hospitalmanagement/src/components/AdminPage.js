import React from 'react';
import './AdminPage.css';
import video from '../images/video.mp4';
import { Link } from 'react-router-dom';
// import doc1 from '../images/doc1.webp';

const AdminPage = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">
          {/* <Link to="/">
            <img src={doc1} alt="Logo" className="logo-image" />
          </Link> */}
        </div>
        <ul id="new-nav-items" className="navbar-menu">
          <li id="hitem" className="navbar-item" >
            <Link to="/doctorsview" className='numtext'>View Doctors</Link>
          </li>
          <li id="hitem" className="navbar-item">
            <Link to="/doctorsdelete" className='numtext'>Delete Doctors</Link>
          </li>
          <li id="hitem" className="navbar-item">
            <Link to="/doctorsapprove" className='numtext'>Approve Doctors</Link>
          </li>
          <li id="hitem" className="navbar-item">
            <Link to="/pstientsview" className='numtext'>View Patients</Link>
          </li>
        </ul>
      </nav>
      <br></br><br></br><br></br>
      <div className='video'>
       <video src={video} controls autoPlay/>
      </div >
      <div  className="marquee-container">       
      <marquee  behavior="scroll" direction="left">
      Doctors are the healers of <span className='marbody'>body</span> and <span className='marsoul'>soul</span>.
       </marquee>
       </div>

      </div> 
  );
};

export default AdminPage;
