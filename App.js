import React, { useState, useEffect } from "react"
import Counter from "./Counter"

export default function App() {
  const [favicon, setFavicon] = useState("")
  const handlePreFetch = () => {
    const request = new Request("https://www.mozilla.org/favicon.ico")
    try {
      fetch(request).then((res) => {
        console.log("res: ", res)
        setFavicon(res.url)
        window.localStorage.setItem("url", res.url)
      })
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    handlePreFetch()
  }, [])
  return (
    <>
      <h1>hello world!</h1>
      <h2>Server Side Rendering is running!</h2>
      <img src={favicon} alt="favicon" />
      <Counter />
    </>
  )
}
