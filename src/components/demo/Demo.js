import React, { Component } from "react";
import ClickCounter from "../clickcounter/ClickCounter";
import HoverCounter from "../hovercounter/HoverCounter";

export default class Demo extends Component {
  render() {
    return (
      <>
        <ClickCounter />
        <HoverCounter />
      </>
    );
  }
}
