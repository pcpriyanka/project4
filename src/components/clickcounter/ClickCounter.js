import React, { Component } from "react";
import CounterHOC from "../hoc/CounterHOC";

class ClickCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return <button onClick={incrementCount}> Clicked {count} Times</button>;
  }
}
export default CounterHOC(ClickCounter);
