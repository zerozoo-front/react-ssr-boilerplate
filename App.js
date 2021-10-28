import React, { useState } from "react"
import Counter from "./Counter"

export default function App() {
  const [num, setNum] = useState(0)
  return (
    <>
      <h1>hello world!</h1>
      <h2>Server Side Rendering is running!</h2>
      <h3>{num}</h3>
      <Counter />
    </>
  )
}
