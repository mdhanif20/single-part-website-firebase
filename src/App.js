import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';

import Deshboard from './Pages/Deshboard/Deshboard/Deshboard';
import ClientInfo from './Pages/Deshboard/Deshboard/ClientInfo/ClientInfo';
import Patients from './Pages/Deshboard/Patients/Patients';
import PrivateRoute from './Pages/ReactRoute/PrivateRoute/PrivateRoute';
import AdminRoute from './Pages/ReactRoute/AdminRoute/AdminRoute';
import MakeAdmin from './Pages/Deshboard/AdminPanel/MakeAdmin/MakeAdmin';
import AllAppointment from './Pages/Deshboard/PatientDetails.js/AllAppointment';
import ContactUs from './Pages/Contact/ContactUs';



import Login from './Pages/OnlyUseThis/Ui/Login';
import Reagister from './Pages/OnlyUseThis/Ui/Reagister';
import AuthProvider from './Pages/OnlyUseThis/Firebase/AuthProvider';


function App() {
  return (
    <div className='App'> 
     <AuthProvider>
      <BrowserRouter>
            <Routes>
              
              <Route path="/" element={<Login/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/reagister" element={<Reagister/>} />
              
             

            </Routes>
        </BrowserRouter>
     </AuthProvider>
     
      </div>
  );
}

export default App;
