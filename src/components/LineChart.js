import React from 'react';
import './LineChart.css';

const LineChart = ({ data }) => {

  const maxValue = Math.max(...data.revenue, ...data.cost);
  const scale = 150 / maxValue;
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return (
    <div className="line-chart">
      <h3>Revenue vs Cost (Last 12 Months)</h3>
      <svg width="100%" height="200" viewBox="0 0 800 200">
        {/* X-axis */}
        <line x1="50" y1="180" x2="750" y2="180" stroke="#ccc" strokeWidth="1" />
        
        {/* Y-axis */}
        <line x1="50" y1="180" x2="50" y2="30" stroke="#ccc" strokeWidth="1" />
        
        {/* Grid lines and labels */}
        {[0, 0.5, 1, 1.5, 2, 2.5, 3].map((val) => (
          <g key={val}>
            <line 
              x1="50" 
              y1={180 - val * 60} 
              x2="750" 
              y2={180 - val * 60} 
              stroke="#eee" 
              strokeWidth="1" 
            />
            <text x="30" y={180 - val * 60 + 5} fontSize="12" fill="#666">
              {val}M
            </text>
          </g>
        ))}
        
        {/* Month labels */}
        {months.map((month, i) => (
          <text 
            key={i} 
            x={50 + i * 60} 
            y="195" 
            fontSize="10" 
            fill="#666" 
            textAnchor="middle"
          >
            {month}
          </text>
        ))}
        
        {/* Revenue line */}
        <polyline
          fill="none"
          stroke="#4CAF50"
          strokeWidth="2"
          points={data.revenue.map((val, i) => `${50 + i * 60},${180 - val * scale}`).join(' ')}
        />
        
        {/* Cost line */}
        <polyline
          fill="none"
          stroke="#F44336"
          strokeWidth="2"
          points={data.cost.map((val, i) => `${50 + i * 60},${180 - val * scale}`).join(' ')}
        />
        
        {/* Legend */}
        <rect x="600" y="30" width="20" height="2" fill="#4CAF50" />
        <text x="625" y="35" fontSize="12" fill="#333">Revenue</text>
        <rect x="600" y="50" width="20" height="2" fill="#F44336" />
        <text x="625" y="55" fontSize="12" fill="#333">Cost</text>
      </svg>
    </div>
  );
};

export default LineChart;