import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Students from "./components/Students";
import {BrowserRouter, Routes, Route} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route path="students" element={<Students />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
