import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import Navbar from './Navbar';
import BlogFeed from './BlogFeed';

const styles = theme => ({
  main: {
    display: "flex",
    "min-height": "100vh",
    height: "100vh", //fallback if min-height not supported
    "min-width": "100vw",
    width: "100vw", //fallback
    background: "#363636",
  },
});

class Blog extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.main}>
        <Navbar />
        <BlogFeed />
      </div>
    );
  }
}

export default withStyles(styles)(Blog);
