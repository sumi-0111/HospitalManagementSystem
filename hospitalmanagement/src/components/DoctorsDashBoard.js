import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './DoctorsDashBoard.css';
import doctor1 from '../images/doctor1.webp';
import doctor2 from '../images/doctor2.jpeg';
import doctor3 from '../images/doctor3.webp';
import doctor4 from '../images/doctor4.webp';
import caro4 from '../images/caro4.webp'
import { Link } from 'react-router-dom';
import Footer from './Footer';

const DoctorDashBoard = ({ status }) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  const isButtonDisabled = !status;
  console.log(isButtonDisabled);
  return (
    <div className="doctor-dashboard-container">
      <h1>Welcome to Doctors Dashboard</h1><br></br>
      <Slider {...settings}>
        <div>
          <img
            src={caro4}
            className="carouseldoctordas-image"
          />
        </div>
        <div>
          <img
            src={doctor2}
            className="carouseldoctordas-image"
          />
        </div>
        <div>
          <img
            src={doctor3}
            className="carouseldoctordas-image"
          />
        </div>
        <div>
          <img
            src={doctor1}
            className="carouseldoctordas-image"
          />
        </div>
        <div>
          <img
            src={doctor4}
            className="carouseldoctordas-image"
          />
        </div>
      </Slider>
      <button className={`view-patients-button ${isButtonDisabled ? 'disabled' : ''}`} disabled={isButtonDisabled ? 'disabled' : undefined}>
  <Link to='/doctorsview'>View Doctors</Link>
</button>
<div className='docdashBoardContent'>
             <h2 className='OverviewH2DoctorDas'>Casualty Department</h2>
      <p>
        The Emergency department which deals with Emergency conditions or provides immediate treatment.
        In this department, patients are assessed carefully and provided immediate treatment and care before sending for further treatment in a specialised development.
        This department is equipped to handle all kinds of emergencies and provides service 24/7 in the hospital.
      </p>
      <br></br><br></br>
      <h2 className='OverviewH2DoctorDas'>Operating Theatre</h2>
      <p>
        Operating theatre is also known as operating room or operating suite or operation suite.
        OT deals with surgical operations where surgeons perform surgery in an aseptic environment.
        OT rooms have well lighting, controlled humidity and temperature.
        Operating rooms are generally supported by an anaesthetic room, preparation room, scrub room and dirty utility room.
      </p>
      <br></br><br></br>
      <h2 className='OverviewH2DoctorDas'>Intensive Care Unit </h2>
      <p>
        Intensive care unit is also known as critical care unit (CCU), intensive treatment unit (ITU) or intensive therapy unit.
        Intensive care unit deals with life-threatening or severe injuries and illnesses that require close monitoring from life support devices, constant care.

        In ICU, patients are monitored and staffed by highly trained physicians, nurses and respiratory therapists.
      </p>
      <br></br><br></br>
      <h2 className='OverviewH2DoctorDas'>Paediatrics Department </h2>
      <p>
        The paediatrics department deals with infants, children and adolescents.
        This department deals with some significant diseases such as infectious diseases, congenital diseases, mental disorders and childhood cancer.
        In this department health care personnel are specialized and also procedures and practices are different based on the child's age group
      </p> </div>
      <br></br><br></br><br></br>
  
      <Footer />
    </div>
  );
};

export default DoctorDashBoard;
