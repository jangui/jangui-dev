import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Tooltip from "@material-ui/core/Tooltip";

const styles = theme => ({
  image_small: {
    'height': '16px',
    'width': '16px',
    'padding': '10px 5px',
  },
  button: {
    'background': 'none',
    'border': 'none',
  },
});

class CopyLink extends Component {
    state = {
    text: "copy link",
    copied: false,
  };

  hoverHandler = () => {
    if (this.state.copied === false) { return }
    this.setState( () => { return { copied: false} });
    setTimeout( () => this.setState( () => {
      return {text: "copy link"}
    }), 5000);
  };

  clickHandler = () => {
    this.setState( () => {
      return {text: "link copied!", copied: true}
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <CopyToClipboard text={this.props.text}
          onCopy={() => this.setState({copied: true})}>
            <span>
              <Tooltip
                title={this.state.text}
                placement="top"
                enterTouchDelay="10"
              >
                <button
                  className={classes.button}
                  onClick={this.clickHandler}
                  onMouseOver={this.hoverHandler}
                >
                  <img
                    className={classes.image_small}
                    src={process.env.PUBLIC_URL + '/link.png'}
                    alt="link"
                  />
                </button>
              </Tooltip>
            </span>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(CopyLink);
