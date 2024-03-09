// AppContext.js

import React, { createContext, useState } from 'react';

// Create context
const AppContext = createContext();

// Create provider component
const AppProvider = ({ children }) => {
  // Define state
  const [assets, setAssets] = useState([]);

  // Define functions to update state
  const addAsset = (newAsset) => {
    setAssets([...assets, newAsset]);
  };

  // Provide state and functions through context
  return (
    <AppContext.Provider value={{ assets, addAsset }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
