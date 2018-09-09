import React from 'react';

const Dashboard = ({contactCounter}) => {
  return (
    <div className="dashboard-containcer">
      <h1>Dashboard</h1>
      <div className="dashboard-item">
        <h2>Number of contacts: {contactCounter}</h2>
      </div>
    </div>
  );
}

export default Dashboard;
