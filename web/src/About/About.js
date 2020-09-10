import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';

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
  footer_spacer: {
    'flex-grow': '1',
  },
  footer: {
    'width': '50%',
    'padding-bottom': '10px',
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
    'padding-top': '10px',
  },
  email_link: {
    'color': 'pink',
    'text-decoration': 'none',
    'transition': '0.3s',
    'padding-bottom': '10px',
    '&:hover': {
      'color': 'purple'
    },
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
        </div>
        <div className={classes.footer_spacer}></div>
        <div className={classes.footer}>
          <a href="mailto: j@danguillecourt.com" className={classes.email_link}>
            j@danguillecourt.com
          </a>
          <div className={classes.footer_flexbox}>
            <a href="https://twitter.com/jangui_">
              <img
                className={classes.image}
                src={process.env.PUBLIC_URL + '/twitter_icon.png'}
                alt="twitter"
              />
            </a>
            <a href="https://github.com/jangui">
              <img
                className={classes.image}
                src={process.env.PUBLIC_URL + '/github_icon.png'}
                alt="github"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(About);
