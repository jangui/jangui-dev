import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Navbar from './Navbar';

const styles => ({
  navBarDiv: {
    position: 'fixed',
    top: 0,
    width: '100%',
  },
});

class LandingPage extends Component {
  render() {
    return (
      <div>
        <header>
          <Navbar />
        </header>
      </div>
    );
  }
}
