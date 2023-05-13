import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/Pages/HomePage';
import Page1 from './Components/Pages/Page1';
import Page2 from './Components/Pages/Page2';
import Page3 from './Components/Pages/Page3';
import Sidebar from './Components/Sidebar/Sidebar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="Routes">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/page3" element={<Page3 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
