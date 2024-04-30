import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 


function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the root URL */}
        <Route path="/" element={<Home />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;
