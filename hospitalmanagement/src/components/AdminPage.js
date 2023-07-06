import React from 'react';
import './AdminPage.css';
import video from '../images/video.mp4';
import { Link } from 'react-router-dom';
import emer from '../images/emer.jpg';
import nursing from '../images/nursing.webp';
// import Footer from './Footer';
// import doc1 from '../images/doc1.webp';

const AdminPage = () => {
  return (
    <div className='adminPageWhole'>
    <div>
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
      </nav><br></br><br></br><br></br><br></br>
      <div>
        <h1 className='adPageH1'>Welcome to Admin DashBoard</h1>
      </div>
      <br></br><br></br><br></br>
      <div className='videoadminpage'>
       <video src={video}  autoPlay controls={false} />
      </div ><br></br>
      <div  className="marquee-container">       
      <marquee  behavior="scroll" direction="left" className='doctorsarehealers'>
      Doctors are the healers of <span className='marbody'>body</span> and <span className='marsoul'>soul</span>.
       </marquee>
       </div>
</div> 
</div>
  );
};

export default AdminPage;
