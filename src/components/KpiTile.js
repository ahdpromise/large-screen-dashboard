import React from 'react';
import './KpiTile.css';

const KpiTile = ({ title, value, unit }) => {
  return (
    <div className="kpi-tile">
      <h3>{title}</h3>
      
      <div className="kpi-value">
        {value} <span className="kpi-unit">{unit}</span>
      </div>
    </div>
  );
};

export default KpiTile;