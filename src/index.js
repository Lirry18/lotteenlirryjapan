import React from 'react';
import ReactDOM from 'react-dom/client'; // let op: 'client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Doneer from './Doneer';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/doneer" element={<Doneer />} />
    </Routes>
  </Router>
);

