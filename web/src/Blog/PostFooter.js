import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import CopyLink from './CopyLink';


const styles = theme => ({
  footer: {
    'width': '50%',
    'display': 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
    'margin': '0px 0px',
    'padding-bottom': '10px',
    'color': 'white',
    '& a': {
      'text-decoration': 'none',
      'color': 'pink',
      'transition': '0.3s',
      'padding': '5px 0px',
    },
    '& a:hover': {
      'color': 'purple',
    },
  },
  footer_flexbox: {
    'display': 'flex',
    'align-items': 'center',
    'justify-content': 'center',
  },
  image: {
    'height': '32px',
    'width': '32px',
    'padding-top': '5px',
    'padding': '0px 5px',
  },
});

class PostFooter extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.footer}>
        <CopyLink text={window.location.href}/>
        <a href="mailto: j@danguillecourt.com"> j@danguillecourt.com </a>
        <div className={classes.footer_flexbox}>
          <a href="https://twitter.com/jangui_">
            <img
              className={classes.image}
              src={process.env.PUBLIC_URL + '/twitter_icon.png'}
              alt="twitter"
            />
          </a>
          <a href="https://github.com/jangui" alt="github">
            <img
              className={classes.image}
              src={process.env.PUBLIC_URL + '/github_icon.png'}
              alt="github"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PostFooter);
