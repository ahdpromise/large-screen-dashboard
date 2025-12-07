import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Global styles
import App from './App';

// Create a root element and render the app
const root = ReactDOM.createRoot
(document.getElementById('root'));

root.render(

  <React.StrictMode>  
    <App />
  </React.StrictMode>
);



















/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);  

Joson file (package.json) should look like this:

"dependencies": {
  "react": "^17.0.2",
  "react-dom": "^17.0.2",
  "react-scripts": "4.0.3",
  // احتفظ بالباقي كما هو
}


*/
