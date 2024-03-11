import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import AddAsset from './components/AddAsset';
import ViewAssets from './components/ViewAssets';
import Reports from './components/Reports';
import Notifications from './components/Notifications';
import Settings from './components/Settings';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-asset" element={<AddAsset />} />
          <Route path="/view-assets" element={<ViewAssets />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
