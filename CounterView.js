import React from "react"
export default function CounterView({ value, onIncrease, onDecrease }) {
  return (
    <>
      <button onClick={onIncrease}>+</button>
      <span>{value}</span>
      <button onClick={onDecrease}>-</button>
    </>
  )
}
