import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import data from '../data.js'
import MyPage from './pages/MyPage.jsx';
import linkData from '../linkData.js';
import '@fortawesome/fontawesome-free/css/all.min.css';



function App() {
  console.log(data)   
  console.log(linkData)
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        {/* Other routes */}
        {data.map((page, index) => (
          <Route key={index} path={page.pagePath} element={<MyPage pageData={page} linkData={linkData} />} />
        ))}
        
      </Routes>
    </Router>
  );
}

export default App;
