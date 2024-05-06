import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import Post from './pages/Post'
import Collection from './pages/Collection'
import Guide from './pages/Guide'
import data from '../data.js'

function App() {
  console.log(data)
  return (
    <Router>
      <Routes>
        {/* Route for the root URL */}
        {
          data.map((data)=>(
            <Route path={data.pagePath} element={<Guide pageData={data}/>} />
          ))
        }
        {/* Other routes
        <Route path="/collection" element={<Collection />} />
        <Route path="/post" element={<Post />} />
        <Route path="/guide" element={<Guide />} /> */}

      </Routes>
    </Router>
  );
}

export default App;
