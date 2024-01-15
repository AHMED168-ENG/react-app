import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import ReactDOM from 'react-dom/client';
import App from './App';
// import Dashboard from './Dashboard';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Dashboard enableSmoothScroll={false} />
          <App enableSmoothScroll={false} />
      </BrowserRouter>
  </React.StrictMode>
);
