import React from 'react';
//import { Component } from 'react';
import PropTypes from 'prop-types';
class ClassComponent extends React.Component {

  state = {
    counter: 0,
  };

  up = () => {
    this.setState({ counter: this.state.counter + 2});
  };

  down = () => {
    this.setState({ counter: this.state.counter - 1});
  };

  render() {

    return (
      <div>
        <h1>Class Component</h1>
        <button onClick={this.up}>숫자 +2</button>
        <button onClick={this.down}>숫자 -1</button>
      </div>
    );
  }
}
ClassComponent.defaultProps = {
  name: 'abc',
  age: '11',
};
ClassComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.string,
};
export default ClassComponent;