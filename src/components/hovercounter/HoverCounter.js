import React from 'react'
import CounterHOC from '../hoc/CounterHOC';

function HoverCounter(props) {
  return (
    <button onMouseOver={props.incrementCount}> Clicked {props.count} Times</button>
  )
}
export default CounterHOC(HoverCounter)
