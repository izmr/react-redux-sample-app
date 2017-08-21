import React, { Component, PropTypes } from 'react';

import Box from './Box';
import PostalCodeAjax from './PostalCodeAjax';

export default class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBox: true,
    };
  }

  handleClick() {
    this.setState({showBox: !this.state.showBox});
  }

  render() {
    const btnName = this.state.showBox ? 'Box非表示' : 'Box表示';
    const boxTitle = this.state.boxTitle;
    const boxComponent = this.state.showBox ? (
      <Box boxTitleP={boxTitle}>Sample Box</Box>
    ) : null;

    return (
      <div className="container">
        <h1>{this.props.title}</h1>
        boxTitle: <input type="text" onChange={elm => this.setState({boxTitle: elm.target.value})} />
        {boxComponent}
        <button className="btn btn-primary" onClick={() => this.handleClick()}>{btnName}</button>
        <div>
          {this.props.children}
        </div>
        <PostalCodeAjax />
      </div>
    );
  }
}

Root.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};
