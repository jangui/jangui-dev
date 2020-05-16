import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Navbar from './Navbar';

const styles = theme => ({
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

export default withStyles(styles)(LandingPage);
