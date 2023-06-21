import React, { useState } from 'react'

function StatefulBob() {
  const [state, setState] = useState({
    count: 0,
    user: 'Bob'
  })

  const handleClick = () => {
    setState({
      ...state,
      count: state.count + 1
    })
  }

  return (
    <>
      <h1>{state.user}</h1>
      <p>{state.count}</p>

      <button onClick={handleClick}>
        +
      </button>
    </>
  )
}

function App() {
  return (
    <>
      <StatefulBob />
    </>
  )
}

export default App
