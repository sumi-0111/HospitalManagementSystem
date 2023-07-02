import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SignIn from './components/SignIn';
import RegisterHome from './components/RegisterHome';
import PatientRegister from './components/PatientRegister';
import DoctorRegister from './components/DoctorRegister';
import AdminPage from './components/AdminPage';

function App() {
  return (
    <BrowserRouter>

    <div className="App">
     <Routes>
      <Route path='/signIn' element={<SignIn/>}/>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/registerhome' element={<RegisterHome/>}/>
      <Route path='/patregistration' element={<PatientRegister/>}/>
      <Route path='/docregistration' element={<DoctorRegister/>}/>
      <Route path='/adminpage' element={<AdminPage/>}/>
     </Routes>

    </div>
    </BrowserRouter>

  );
}

export default App;
