import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import MarkDown from './MarkDown';
import PostFooter from './PostFooter';

const styles = theme => ({
  main: {
    'background': '#1f2131',
    'margin-top': '-30px',
    'width': '100%',
    'height': '100%',
    'display': 'flex',
    'flex-direction': 'column',
    'flex-wrap': 'none',
    'align-items': 'center',
  },
  post: {
    'height': '100%',
    'width': '100%',
    'display': 'flex',
    'justify-content': 'center',
    'margin-left': 'auto',
    'margin-right': 'auto',
    'flex-wrap': 'wrap',
  },
  footer: {
    'width': '50%',
    'display': 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
    'margin': '0px 0px',
    'padding-bottom': '20px',
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
  image_small: {
    'height': '16px',
    'width': '16px',
    'padding': '10px 5px',
  },
});

class BlogPost extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.main}>
        <div className={classes.post}>
          <MarkDown filepath={this.props.location.pathname}/>
          <PostFooter />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(BlogPost);
