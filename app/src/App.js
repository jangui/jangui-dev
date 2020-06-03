import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Blog from './Blog';

function App() {
  return (
    <Router>
      <Route path="/index" component={ LandingPage }/>
      <Route path="/" component={ Blog }/>
    </Router>
  );
}

export default App;
