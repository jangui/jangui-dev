import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
//import { Link } from 'react-router-dom';


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
    'color': '#000000',
    "background-color": "#00faaa",
    "border-radius": "100px",
    "padding": "5px 15px",
    "fontSize": "22px"
    },
  nav__right: {
    'display': 'flex',
    'flex-direction': 'row'
  },
  nav__right__link: {
    'textDecorationLine': 'none',
    'font-family': "'Itim', cursive",
    'color': '#000000',
    "border-radius": "100px",
    "padding": "5px 15px",
    "fontSize": "22px"
  }
});

//<Link className={classes.nav__name} to='/'>Jaime Danguillecourt</Link>
class Navbar extends Component {
  render() {
    const { classes } = this.props;

    return (
      <nav className={classes.nav}>
        <a className={classes.nav__link} href="/"> Jaime Danguillecourt </a>
        <div className={classes.nav__right}>
          <a className={classes.nav__link} href="/blog"> blog </a>
        </div>
      </nav>
    );
  }
}

export default withStyles(styles)(Navbar);
