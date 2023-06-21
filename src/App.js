import React, { useState } from 'react'

function PropDrilling() {
  const [count] = useState(0)
  return <Child count={count} />
}

function Child({ count }) {
  return <Grandchild count={count} />
}

function Grandchild({ count }) {
  return <div>{count}</div>
}

function App() {
  return (
    <>
      <PropDrilling />
    </>
  )
}

export default App
