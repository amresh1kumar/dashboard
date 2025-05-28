import React from 'react';
import '../Style/Dashboard.css'

function Dashboard() {
  // Sample static data (replace with real data from backend later)
  const totalEmployees = 120;
  const regularEmployees = 70;
  const contractEmployees = 30;
  const trainingEmployees = 20;

  return (
    <div className="dashboard-container">
      <h2>Admin Overview Dashboard</h2>
      <div className="dashboard-cards">
        <div className="card total">
          <h3>Total Employees</h3>
          <p>{totalEmployees}</p>
        </div>
        <div className="card regular">
          <h3>Regular Employees</h3>
          <p>{regularEmployees}</p>
        </div>
        <div className="card contract">
          <h3>Contract Employees</h3>
          <p>{contractEmployees}</p>
        </div>
        <div className="card training">
          <h3>Training Employees</h3>
          <p>{trainingEmployees}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

