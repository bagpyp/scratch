import './App.css'

export default function App() {
  return (
    <div className="App">
      <MyComponent2
        name="robbie"
        bio={{ age: 69 }}
        icon={<MyComponent />}
      />
    </div>
  )
}

function MyComponent({ name, icon }) {
  return (
    <>
      {icon}
      <h1>{name}</h1>
    </>
  )
}

const MyComponent2 = () => {
  return <p>hi</p>
}

function Card(props) {
  return (
    <div className="card">
      {props.children}
    </div>
  )
}
