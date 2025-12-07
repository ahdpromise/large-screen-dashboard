import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import CustomerList from './components/CustomerList';
import Login from './components/Login';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentView, setCurrentView] = useState('dashboard');

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Large Screen Dashboard</h1>
        <nav>
          <button 
            onClick={() => setCurrentView('dashboard')} 
            className={currentView === 'dashboard' ? 'active' : ''}
          >
            Dashboard
          </button>
          <button 
            onClick={() => setCurrentView('customers')} 
            className={currentView === 'customers' ? 'active' : ''}
          >
            Customers
          </button>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </nav>
      </header>
      <main>
        {currentView === 'dashboard' && <Dashboard />}
        {currentView === 'customers' && <CustomerList />}
      </main>
    </div>
  );
}

export default App;