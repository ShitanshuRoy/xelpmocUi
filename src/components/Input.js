// import React, { Component } from "react";
// import "./css/Input.css";

import React, { Component } from "react";
import "./css/Input.css";
export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      disabled: this.props.disabled,
      focused: false
    };
  }
  handleChange(event) {
    if (this.props.onChange) {
      this.props.onChange(event.target.value);
    }
    this.setState({ value: event.target.value });
  }
  handleFocus(event) {
    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
    this.setState({ focused: true });
  }
  handleBlur(event) {
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
    this.setState({ focused: false });
  }
  render() {
    const focus = this.state.focused ? "Input-focused" : "";
    const disable = this.state.disabled ? "Input-disabled" : "";
    var { leftChild, rightChild, ...other } = this.props;
    return (
      <div className={`Input ${focus} ${disable}`}>
        {leftChild &&
          <div className="Input-leftChild">
            {leftChild}
          </div>}
        <input
          type="text"
          {...other}
          value={this.state.value}
          className="Input-box"
          onChange={event => this.handleChange(event)}
          onFocus={event => this.handleFocus(event)}
          onBlur={event => this.handleBlur(event)}
        />
        {rightChild &&
          <div className="Input-rightChild">
            {rightChild}
          </div>}
      </div>
    );
  }
}

