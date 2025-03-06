import React from 'react';
import Link from 'next/link';

const DashboardButtons: React.FC = () => {
  return (
    <div style={dashboardContainerStyle}>
      <Link href="/doctor-dashboard" passHref>
        <div style={dashboardButtonStyle}>
          <img src="/links/doctor.jpg" alt="Doctor Dashboard" style={dashboardImageStyle} />
        </div>
      </Link>
      <Link href="/patient-dashboard" passHref>
        <div style={dashboardButtonStyle}>
          <img src="/links/patient.jpg" alt="Patient Dashboard" style={dashboardImageStyle} />
        </div>
      </Link>
      <Link href="/medical-records" passHref>
        <div style={dashboardButtonStyle}>
          <img src="/links/records.jpg" alt="Medical Records" style={dashboardImageStyle} />
        </div>
      </Link>
    </div>
  );
};

// Define inline styles or use CSS classes
const dashboardContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: 'bg-blue-100',
};

const dashboardButtonStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  textAlign: 'center',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  height: '7cm', // Height adjustment
  width: '80vw', // 80% of the viewport width
  maxWidth: '100%',
  borderRadius: '20px',
  overflow: 'hidden',
  marginBottom: '2rem',
};

const dashboardImageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '20px',
  transition: 'transform 0.3s ease',
};

export default DashboardButtons;
