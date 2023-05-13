import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`Sidebar ${isCollapsed ? 'collapsed' : ''}`} onClick={toggleSidebar}>
      <div className="Sidebar-header">
        <h1>Menu</h1>
      </div>
      <div className="hr">
        <hr />
      </div>
      <div className="Sidebar-content">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/page1">Page 1</Link></li>
          <li><Link to="/page2">Page 2</Link></li>
          <li><Link to="/page3">Page 3</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
