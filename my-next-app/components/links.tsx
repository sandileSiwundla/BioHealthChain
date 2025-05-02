"use client"; // Marking this component as a Client Component

import * as React from "react";
import Link from 'next/link';

const DashboardButtons: React.FC = () => {
  return (
    <div className="dashboard-container">
      <Link href="/doctor-dashboard" passHref>
        <div className="dashboard-button">
          <img src="/links/doctor.jpg" alt="Doctor Dashboard" className="dashboard-image" />
        </div>
      </Link>
      <Link href="/patientLandingPage" passHref>
        <div className="dashboard-button">
          <img src="/links/patient.jpg" alt="Patient Dashboard" className="dashboard-image" />
        </div>
      </Link>
      <Link href="/medical-records" passHref>
        <div className="dashboard-button">
          <img src="/links/records.jpg" alt="Medical Records" className="dashboard-image" />
        </div>
      </Link>
    </div>
  );
};

export default DashboardButtons;

<style jsx>{`
  .dashboard-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #e0f7fa; /* bg-blue-100 equivalent */
  }

  .dashboard-button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    height: 7cm;
    width: 80vw;
    max-width: 100%;
    border-radius: 20px;
    overflow: hidden;
    margin-bottom: 2rem;
  }

  .dashboard-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    transition: transform 0.3s ease;
  }
`}</style>
