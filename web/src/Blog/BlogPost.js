import React from 'react';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  post: {
    background: "#262626",
    height: "200px",
    widgth: "100px",
    border: "10px",
    "border-style": "solid",
    "border-color": "#bbecee",
  },
});

function BlogPost(props) {
  const { classes } = props;
  return (
    <div className={classes.post}>
      <h1> Title Blog Post! </h1>
    </div>
  );
}

export default withStyles(styles)(BlogPost);
