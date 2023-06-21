import React, {
  useEffect,
  useState
} from 'react'

class LifecycleClass extends React.Component {
  componentDidMount() {
    // Initialize
  }

  componentDidUpdate() {
    // Updated
  }

  componentWillUnmount() {
    // Removed
  }
}

const Lifecycle = () => {
  const [count] = useState(0)

  // Code run in response to a lifecycle event is called a "side effect"
  useEffect(() => {
    console.log('hi!')
    return () => console.log('destroyed!')
  }, [
    count // empty dep array means run on mount only
  ])
}

function App() {
  return (
    <>
      <Lifecycle />
    </>
  )
}

export default App
