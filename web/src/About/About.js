import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles = theme => ({
  main: {
    'width': '100%',
    'height': '100%',
    'display': 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
    'align-content': 'strech',
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
    'height': '100%',
    'flex-grow': '1',
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
  footer_spacer: {
    'flex-grow': '1',
  },
  footer: {
    'width': '50%',
  },
  footer_flexbox: {
    'display': 'flex',
    'align-items': 'center',
    'justify-content': 'center',
  },
  image: {
    'height': '32px',
    'width': '32px',
    'padding': '0px 5px',
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
            <p> This website is fully dockerized. The frontend is written w/ React, api w/ Express and the database is mongodb. Traefik is used as a reverse proxy and edge router.</p>
          </div>
        </div>
        <div className={classes.footer_spacer}></div>
        <div className={classes.footer}>
          <p> j@danguillecourt.com </p>
          <div className={classes.footer_flexbox}>
            <a href="https://twitter.com/jangui_">
              <img
                className={classes.image}
                src={process.env.PUBLIC_URL + '/twitter_icon.png'}
              />
            </a>
            <a href="https://github.com/jangui">
              <img
                className={classes.image}
                src={process.env.PUBLIC_URL + '/github_icon.png'}
              />
            </a>
          </div>
          <div className={classes.spacer}></div>
          <div className={classes.spacer}></div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(About);
