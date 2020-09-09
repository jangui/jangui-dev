import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock';
import Err from '../Err';

const styles = theme => ({
  markdown: {
    'color': 'white',
    'width': '87%',
    'min-wdith': '360px',
    'max-width': '960px',
    'text-align': 'justify',
    // link styling
    '& a': {
      'color': 'pink',
      'text-decoration': 'none',
      'transition': '0.3s',
    },
    '& a:hover': {
      'color': 'purple',
      'cursor': 'pointer',
    },
    // table styling
    '& table': {
      'border-collapse': 'collapse',
      'display': 'block',
      'overflow': 'auto',
    },
    '& th': {
      'padding': '15px',
      'text-align': 'left',
      'border-bottom': '1px solid #6f6f6f',
    },
    '& td': {
      'color': '#e8e8e8',
      'padding': '15px',
      'text-align': 'left',
      'border-left': 'none',
      'border-right': 'none',
      'border-bottom': '1px solid #6f6f6f',
    },
    '& tr:hover': {
      'background-color': '#303245',
    },
    // code styling
    '& pre': {
      'padding': '20px',
      'overflow-x': 'auto',
    },
    // paragraph styling
    '& p': {
      'text-indent': '30px',
    },
    // blockquote styling
    '& blockquote': {
      'background': '#303245',
      'border-left': '10px solid #201c2e',
      'margin': '10px -5px',
      'padding': '15px 15px',
      '& p': {
        'font-weight': 'bold',
        'font-size': '18px',
      },
    },
    // code block styling
    '& pre': {
      'background': 'none',
    },
  },
  spacer: {
    'height': '30px',
  },
});

class MarkDown extends Component {
  constructor(props) {
    super(props);

    this.state = { markdown: null, err: false };
  }

  componentDidMount() {
    try {
      const filepath = require("." + this.props.filepath + ".md");
      fetch(filepath).then((response) => response.text()).then((text) => {
        this.setState({ markdown: text });
      });
    } catch {
      this.setState( {err: true } );
    }
  }

  render() {
    const { classes } = this.props;

    let content = <ReactMarkdown
      source={this.state.markdown}
      renderers={{ code: CodeBlock }}
    />

    // load 404 if post not found
    if (this.state.err === true) {
      content = <>
        <div className={classes.spacer}></div><Err errMsg="404 Page Not Found"/>
      </>

    }

    return (
      <div className={classes.markdown}>
        {content}
      </div>
    );
  }
}

export default withStyles(styles)(MarkDown);
