// src/App.js
import React, { useState } from "react";
import { Link, Route, Routes } from 'react-router-dom'; // Import Routes and Route
import ScannedPage from './ScannedPage'; // Import the ScannedPage component
import ExportPage from './ExportPage'; 
import { BrowserRouter } from 'react-router-dom';// Import the ExportPage component
const App = () => {	  
 

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ExportPage />} />
          <Route path="/scanned/:id" element={<ScannedPage />} />
          <Route path="*" element={<ExportPage />} /> {/* Redirect all unknown routes to ExportPage */}
        </Routes>
      </BrowserRouter>
    );
};

export default App;