import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';

const styles = theme => ({
  root: {
    display: "flex"
  },
});

class Blog extends Component {
  render() {
    return (
      <div className="root">
      </div>
    );
  }
}

export default withStyles(styles)(Blog);
