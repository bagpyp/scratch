import React from 'react'

function Events23() {
  // first class object
  const clickHandler = (e, foo) => {
    console.log(e, foo)
  }

  return (
    <ChildOfEvents
      onClick={(e) => clickHandler(e, 23)}
    />
  )
}

function ChildOfEvents({ onClick }) {
  return (
    <button onClick={onClick}>+</button>
  )
}

function App() {
  return (
    <>
      <Events23 />
    </>
  )
}

export default App
