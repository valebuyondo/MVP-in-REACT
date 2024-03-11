import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/add-asset">
            <AddAsset />
          </Route>
          <Route path="/view-assets">
            <ViewAssets />
          </Route>
          <Route path="/reports">
            <Reports />
          </Route>
          <Route path="/notifications">
            <Notifications />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
