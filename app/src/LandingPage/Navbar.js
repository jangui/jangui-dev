import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
//import { Link } from 'react-router-dom';


const styles = theme => ({
  nav: {
    'width': '100%',
    'background': '#aaa',
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
    }
});

//<Link className={classes.nav__name} to='/'>Jaime Danguillecourt</Link>
class Navbar extends Component {
  render() {
    const { classes } = this.props;

    return (
      <nav className={classes.nav}>
      </nav>
    );
  }
}

export default withStyles(styles)(Navbar);
