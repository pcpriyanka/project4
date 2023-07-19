import React, { Component } from "react";

export default class Greet extends Component {
  render() {
    const { name, msg = "default message" } = this.props;
    return (
      <h1>
        Hello {name} {msg}
      </h1>
    );
  }
}
