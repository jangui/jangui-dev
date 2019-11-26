import React, { component } from 'react';
import { withStyles } from 'material-ui@styles';


class Navbar from Component {
  render() {
    const { classes } = this.props;

    return (
      <nav className={classes.nav}>
        <Link className={classes.nav__name} to='/'>Jaime Danguillecourt</Link>
      </nav>
    );
  }
}

export default withStyles(styles)(Navbar);
