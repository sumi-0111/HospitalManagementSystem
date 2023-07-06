import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SignIn from './components/SignIn';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PatientsView from './components/PatientsView';
import RegisterHome from './components/RegisterHome';
import PatientRegister from './components/PatientRegister';
import DoctorRegister from './components/DoctorRegister';
import AdminPage from './components/AdminPage';
import DoctorsView from './components/DoctorsView';
import DoctorsDelete from './components/DoctorsDelete';
import DoctorsApprove from './components/DoctorsApprove';
import PatientDashBoard from './components/PatientDashBoard';
import DoctorsApproveProtected from './components/ProtectedRouting/DoctorsApproveProtected';
import DoctorsDashBoard from './components/DoctorsDashBoard';
import ApprovedDoctorsView from './components/ApprovedDoctorsView';
import DisapproveDoctors from './components/DisapproveDoctors';
import PatientViewDashBoardProtected from './components/ProtectedRouting/PatientViewsDashBoardProtected';
import DoctorsDeleteProtected from './components/ProtectedRouting/DoctorsDeleteProtected';
import PatientDashBoardProtected from './components/ProtectedRouting/PatientDashBoardProtected';
import DoctorsDashBoardProtected from './components/ProtectedRouting/DoctorsDashBoardProtected';
import ApproveDoctorsViewProtected from './components/ProtectedRouting/ApproveDoctorsViewProtected';
import DisApproveDoctorsProtected from './components/ProtectedRouting/DisapproveDoctorsProtected';
import AdminPageProtected from './components/ProtectedRouting/AdminPageProtected';
function App() {

  var token;
  return (
    <BrowserRouter>

    <div className="App">
     <Routes>
      <Route path='/signIn' element={<SignIn/>}/>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/registerhome' element={<RegisterHome/>}/>
      <Route path='/patregistration' element={<PatientRegister/>}/>
      <Route path='/docregistration' element={<DoctorRegister/>}/>

      <Route path='/adminpage' element={
      <AdminPageProtected token={token}>
      <AdminPage/>
      </AdminPageProtected>
      }/>

      <Route path='/approveddoctors' element=
      {
      <ApproveDoctorsViewProtected token={token}>
      <ApprovedDoctorsView/>
      </ApproveDoctorsViewProtected>
      }/>

      <Route path='/doctorsview' element=
      {
      <DoctorsApproveProtected token={token}>
      <DoctorsView/>
      </DoctorsApproveProtected>
      }/>

      <Route path='/doctorsdelete' element={
      <DoctorsDeleteProtected token={token}>
      <DoctorsDelete/>
      </DoctorsDeleteProtected>}/>

      <Route path='/pstientsview' element={ 
      <PatientViewDashBoardProtected>
      <PatientsView/>
      </PatientViewDashBoardProtected>
      }/>

      <Route path='/doctorsapprove' element={
      <DoctorsApproveProtected token={token}>
      <DoctorsApprove/>
      </DoctorsApproveProtected>
      }/>

      <Route path='/patientdashboard' element={
      <PatientDashBoardProtected>
      <PatientDashBoard/>
      </PatientDashBoardProtected>
      }/>

      <Route path='/doctordashboard' element={
      <DoctorsDashBoardProtected token={token}>
      <DoctorsDashBoard/>
      </DoctorsDashBoardProtected>
      }/>

      <Route path='/disapprovedoctors' element={
      <DisApproveDoctorsProtected>
      <DisapproveDoctors/>
      </DisApproveDoctorsProtected>
      }/>

     </Routes> 
    </div>
    </BrowserRouter>

  );
}

export default App;
