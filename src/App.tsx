import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Patient from "./pages/PatientSide";
import PatientSignUp from "./stages/patientTermsAndConditions";
import DoctorLoginPatientSide from './stages/healthcareLoginPatientSide'
import LoadPatientData from './stages/patientDataIntake'
import DynamicContainerLoader from './stages/DynamicContainerLoader'; // Import the dynamic loader component


const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <div className="logo"></div>
        <div className="universal"></div>
        <div className="kotani"></div>
        <div className="poweredby"></div>
        
        {/* Dynamic Loader Component */}
        {/* <DynamicContainerLoader /> */}

        {/* React Router Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/patient" element={<Patient />} />
          <Route path="/patientSignUp" element={<PatientSignUp />} />
          <Route path="/patientSideDrLogin" element={<DoctorLoginPatientSide />} />
          <Route path="/patientDataIntake" element={<LoadPatientData />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
