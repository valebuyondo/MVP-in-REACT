import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import AddAsset from './pages/AddAsset';
import ViewAssets from './pages/ViewAssets';
import Reports from './pages/Reports';
import Notifications from './pages/Notifications';
import Settings from './pages/Settings';
import Footer from './components/Footer';

// Import CSS files
import './styles/header.css';
import './styles/home.css';
import './styles/addAsset.css';
// Import other CSS files as needed

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
