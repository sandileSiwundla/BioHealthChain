import React from "react";
import { Link } from "react-router-dom";

const Patient: React.FC = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>This is your dashboard page.</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default Patient;
