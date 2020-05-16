import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Navbar from './Navbar';
import About from './About';

const styles = theme => ({
  root: {
    background: "#363636",
    width: "100vw",
    height: "100vh"
  },
});

class LandingPage extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <header>
          <Navbar />
        </header>
        <About />
      </div>
    );
  }
}

export default withStyles(styles)(LandingPage);
