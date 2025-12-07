import React from 'react';
import KpiTile from './KpiTile';
import LineChart from './LineChart';
import './Dashboard.css';

const Dashboard = () => {
  
  const chartData = {
    revenue: [2.1, 2.3, 2.5, 2.4, 2.6, 2.7, 2.8, 2.9, 3.0, 3.1, 3.0, 3.2],
    cost: [0.8, 0.9, 0.9, 0.8, 0.9, 1.0, 1.0, 1.1, 1.0, 1.1, 1.0, 1.2]
  };

  return (
    <div className="dashboard">
      <h1>Company Dashboard</h1>
      <div className="kpi-grid">
        <KpiTile title="Revenue" value="3" unit="million EUR" />
        <KpiTile title="Cost" value="1" unit="million EUR" />
        <KpiTile title="Headcount" value="30" unit="" />
      </div>
      <LineChart data={chartData} />
    </div>
  );
};

export default Dashboard;