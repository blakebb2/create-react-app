import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // wrap React.contextProvider
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// Different themes and functions
// Context