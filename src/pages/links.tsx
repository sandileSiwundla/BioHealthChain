import React from 'react';
import { Link } from 'react-router-dom';
import './links.css';
import drDashboard from '/src/assets/links/doctor.jpg';
import patientDashboard from '/src/assets/links/patient.jpg';
import records from '/src/assets/links/records.jpg';

const DashboardButtons: React.FC = () => {
  return (
    <div className="dashboard-container">
      <Link to="/doctor-dashboard" className="dashboard-button">
        <img src={drDashboard} alt="Doctor Dashboard" className="dashboard-img" />
      </Link>
      <Link to="/patient-dashboard" className="dashboard-button">
        <img src={patientDashboard} alt="Patient Dashboard" className="dashboard-img" />
      </Link>
      <Link to="/medical-records" className="dashboard-button">
        <img src={records} alt="Medical Records" className="dashboard-img" />
      </Link>
    </div>
  );
};

export default DashboardButtons;
