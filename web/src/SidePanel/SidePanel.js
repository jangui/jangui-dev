import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const styles = theme => ({
  sidePanel: {
    'height': '100%',
    'background': '#303245',
    'border': '2px solid #6f6f6f',
    'position': 'fixed',
    'top': '0',
    'left': '0',
    'max-width': '400px',
    'width': '60%',
    'z-index': '200',
    'transform': 'translateX(-100%)',
    'transition': 'transform 0.3s ease-out',
    '& ul': {
      'list-style': 'none',
      'height': '100%',
      'width': '100%',
      'display': 'flex',
      'padding': '0px 0px',
      'flex-direction': 'column',
    },
    '& li': {
      'margin': '15px 0px',
      'text-align': 'center',

    },
    '& a': {
      'color': 'pink',
      'font-family': '"Sanchez"',
      'font-size': '24px',
      'text-decoration': 'none',
      'transition': '0.3s',
      '&:hover': {
        'color': 'purple',
      },
    },
  },
  extend: {
    'transform': 'translateX(0%)',
  },
  orderButton: {
    'background-color': 'transparent',
    'font-family': '"Sanchez"',
    'font-size': '24px',
    'border': 'none',
    'text-decoration': 'none',
    'color': 'pink',
    'padding': '0px 0px',
    'transition': '0.3s',
    '&:hover': {
      'color': 'purple',
    },
  },
  divider: {
    'color': '#6f6f6f',
    'font-size': '10px',
    'font-family': '"Sanchez"',
  },
  image: {
    'height': '16px',
    'width': '16px',
    'padding': '20px 5px',
  },
  footer_divider: {
    'flex-grow': '1',
  },
  footer: {
    'display': 'flex',
    'align-items': 'center',
    'justify-content': 'space-between',
    '& p': {
      'color': 'white',
    },
  },
});

class SidePanel extends Component {
  render() {
    const { classes } = this.props;

    // side bar animation
    let style = classes.sidePanel
    if (this.props.visible) {
      style = `${classes.sidePanel} ${classes.extend}`;
    }
    let orderBtn;
    if (this.props.showOrderBtn === true) {
      orderBtn =
          <>
            <li className={classes.divider}> _______ </li>
            <li>
              <button
                className={classes.orderButton}
                onClick={this.props.orderClickHandler}>
              Order: {this.props.order}
              </button>
            </li>
          </>
    }

    return (
      <nav className={style}>
        <ul>
          <li><Link to="/about">About</Link></li>
          {orderBtn}
          <div className={classes.footer_divider}></div>
          <div className={classes.footer}>
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
        </ul>
      </nav>
    );
  }
}

export default withStyles(styles)(SidePanel);

