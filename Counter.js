import React, { useState } from "react"
import CounterView from "./CounterView"
export default function Counter() {
  const [value, setValue] = useState(0)
  const props = {
    value,
    onDecrease: () => setValue((prev) => prev - 1),
    onIncrease: () => setValue((prev) => prev + 1),
  }
  return <CounterView {...props} />
}
