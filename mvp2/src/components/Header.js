// Header.js

import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Asset Tracking System</h1>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Add Asset</a></li>
          <li><a href="#">View Assets</a></li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
