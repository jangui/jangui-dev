import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import LandingPage from './LandingPage';
import Blog from './Blog';

function App() {
  return (
    <Router>
      <Route path="/" component={ LandingPage }/>
      <Route path="/blog" component={ Blog }/>
    </Router>
  );
}

export default App;
