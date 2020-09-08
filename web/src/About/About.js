import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  main: {
    'width': '100%',
    'display': 'flex',
    'justify-content': 'center',
    'background': '#1f2131',
    'text-align': 'center',
    'margin-top': '-20px',
    'font-family': '"Sanchez"',
    'color': '#ffffff',
    'margin-left': 'auto',
    'margin-right': 'auto',
  },
  about: {
    'width': '87%',
    'max-width': '600px',
  },
  about_text: {
    'font-size': '22px',
  },
  mini: {
    'font-size': '10px',
  },
  spacer: {
    'height': '10px',
  },
});

class About extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.main}>
        <div className={classes.about}>
          <h1> Hello World </h1>
          <div className={classes.about_text}>
            <p> Jaime Danguillecourt here.</p>
            <p> I am an engineer in computer science with a passion for machine learning, full stack web dev, game dev and distributed computing.</p>
            <p>I hope you find my blog posts interesting! </p>
          </div>
          <div className={classes.spacer}>________</div>
          <div className={classes.spacer}></div>
          <div className={classes.spacer}></div>
          <div className={classes.spacer}></div>
          <div className={classes.mini}>
            <p> This website is fully dockerized. The frontend is written w/ React, backend w/ Express, using mongodb as my database and traefik as my reverse proxy and edge router.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(About);
