import React from 'react'

const data = [
  { id: 1, name: 'Fido 🐕' },
  { id: 2, name: 'Snowball 🐈' },
  { id: 3, name: 'Murphy 🐈‍⬛' },
  { id: 4, name: 'Zelda 🐈' }
]

function App() {
  return (
    <>
      <ul>
        {data &&
          data.map(({ id, name }) => {
            return (
              <li key={id}>{name}</li>
            )
          })}
      </ul>
    </>
  )
}

export default App
