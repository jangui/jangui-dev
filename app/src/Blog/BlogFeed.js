import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import BlogPost from './BlogPost';

const styles = theme => ({
  feed: {
    display: "flex",
    "flex-direction": "row",
    "align-items": "center",
    "justify-content": "center",
    "flex-wrap": "wrap",
    "top": "200px",
    height: "50%",
    background: "#ffffff",
    padding: "100px 20px",
  },
});

class BlogFeed extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.feed}>
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
      </div>
    );
  }
}

export default withStyles(styles)(BlogFeed);
