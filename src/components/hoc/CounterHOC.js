import React from "react";

const CounterHOC = (OriginalComponent) => {
  class newComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }
    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    };
    render() {
      return (
        <OriginalComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
        />
      );
    }
  }
  return newComponent;
};
export default CounterHOC;
