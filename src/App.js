import React from 'react'

function Events() {
  // first class object
  const clickHandler = (e, foo) => {
    console.log(e)
  }

  return (
    <button
      onClick={(e) => clickHandler(e, 23)}
    >
      Click
    </button>
  )
}

function App() {
  return (
    <>
      <Events />
    </>
  )
}

export default App
