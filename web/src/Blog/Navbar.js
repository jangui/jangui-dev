import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const styles = theme => ({
  nav: {
    'width': '100%',
    'background': '#000000',
    "max-height": "70px",
    'position': 'fixed',
    'top': '0px',
    'left': '0px',
    'box-sizing': 'border-box',
    'padding': '20px 50px',
    'display': 'flex',
    'flex-direction': 'row',
    'justify-content': 'space-between',
    'align-items': 'center',
    },
  nav__link: {
    'textDecorationLine': 'none',
    'font-family': "'Itim', cursive",
    'color': '#ffffff',
    "padding": "5px 10px",
    "fontSize": "22px"
    },
  nav__left: {
    'display': 'flex',
    'flex-direction': 'row',
    'justify-content': 'space-between'
  },
  nav__right: {
    'display': 'flex',
    'flex-direction': 'row',
    'justify-content': 'space-between'
  }
});

class Navbar extends Component {
  render() {
    const { classes } = this.props;

    return (
      <nav className={classes.nav}>
        <div className={classes.nav__left}>
          <Link className={classes.nav__link} to='/'>home</Link>
          <Link className={classes.nav__link} to='/'>blog</Link>
        </div>
        <div className={classes.nav__right}>
          <Link className={classes.nav__link} to="/"> categories> </Link>
        </div>
      </nav>
    );
  }
}

export default withStyles(styles)(Navbar);
