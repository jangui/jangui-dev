import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';

const styles = theme => ({
  about: {
    width: '100%',
    display: "flex",
    padding: "100px 0px",
    "flex-direction": "column",
    "justify-content": "center",
    "align-items": "center",
    background: '#363636',
  },
  about__title: {
    "font-size": '36px',
    "color": '#ffffff',
  },
  about__body: {
    "font-size": '22px',
    "color": '#ffffff',
  }
});

class About extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.about}>
        <h1 className={classes.about__title}> Welcome! </h1>
        <p className={classes.about__body}>
          Hello! As you can see, theres not much here.
          For now!
        </p>
      </div>
    );
  }
}

export default withStyles(styles)(About);
