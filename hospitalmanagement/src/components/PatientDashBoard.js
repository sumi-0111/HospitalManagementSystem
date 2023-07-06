import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './PatientDashBoard.css';
import car01 from '../images/car01.webp';
import caro2 from '../images/caro2.webp';
import caro3 from '../images/caro3.jpeg';
import caro5 from '../images/caro5.webp';
import caro6 from '../images/caro6.webp';
import caro7 from '../images/caro7.webp';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const PatientDashBoard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="patient-dashboard-container">
      <h1>Welcome to Patient Dashboard</h1><br></br>
      <Slider {...settings}>
        <div>
          <img
            src={car01}
            className="carouselpatdas-image"
          />
        </div>
        <div>
          <img
            src={caro2}
            className="carouselpatdas-image"
          />
        </div>
        <div>
          <img
            src={caro5} 
            className="carouselpatdas-image"
          />
        </div>
        <div>
          <img
            src={caro3} 
            className="carouselpatdas-image"
          />
        </div>
        <div>
          <img
            src={caro6} 
            className="carouselpatdas-image"
          />
        </div>
        <div>
          <img
            src={caro7} 
            className="carouselpatdas-image"
          />
        </div>
      </Slider>
      <button className="view-doctors-button">
        <Link to='/doctorsview'> View Doctors
        </Link>
        </button>
        <h2 className='OverviewH2PatDas'>Overview</h2>
         <p>
          
          A hospital is a specialized medical facility where individuals receive diagnosis, treatment, and care for various
          illnesses, injuries, and medical conditions. It is an institution that is equipped with medical professionals, 
          such as doctors, nurses, and specialists, as well as advanced medical technology and equipment.
          Hospitals play a crucial role in providing comprehensive healthcare services to individuals of all ages and 
          addressing a wide range of medical needs. They offer emergency medical care, perform surgeries, conduct diagnostic 
          tests and imaging, provide specialized treatments and therapies, manage chronic conditions, and offer rehabilitation services. 
          Hospitals often have different departments and specialized units, such as emergency departments, operating rooms,
           intensive care units (ICUs), maternity wards, pediatric units, and specialized clinics.
         </p>
         <br></br>
        <Footer/>
    </div>
  );
};

export default PatientDashBoard;
