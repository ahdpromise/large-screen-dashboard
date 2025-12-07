import React from 'react';
import './CustomerList.css';

const CustomerList = () => {
  
  const customers = [
    { id: 1, name: 'Acme Corp', revenue: 500000, country: 'Germany' },
    { id: 2, name: 'Globex', revenue: 450000, country: 'France' },
    { id: 3, name: 'Initech', revenue: 400000, country: 'UK' },
    { id: 4, name: 'Umbrella Corp', revenue: 350000, country: 'Germany' },
    { id: 5, name: 'Wayne Enterprises', revenue: 300000, country: 'Netherlands' },
    { id: 6, name: 'Stark Industries', revenue: 250000, country: 'France' },
    { id: 7, name: 'Cyberdyne', revenue: 200000, country: 'Italy' },
    { id: 8, name: 'Oscorp', revenue: 150000, country: 'Spain' },
    { id: 9, name: 'Wonka Industries', revenue: 100000, country: 'Belgium' },
    { id: 10, name: 'Monsters Inc', revenue: 50000, country: 'Germany' }
  ];

  return (
    <div className="customer-list">
      <h1>Customer List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Revenue (EUR)</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(customer => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.revenue.toLocaleString()}</td>
              <td>{customer.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerList;