import React, { useState } from 'react'

function Stateful() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>{count}</p>

      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        +
      </button>
    </>
  )
}

function App() {
  return (
    <>
      <Stateful />
    </>
  )
}

export default App
