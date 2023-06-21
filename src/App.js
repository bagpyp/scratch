import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  // to detect an error and update the state?
  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.log('Bah!', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <h1>Fallback UI</h1>
    }
    return this.props.children
  }
}

function Component() {
  return <p>A Component {x}</p>
}

function App() {
  return (
    <>
      <h1>Hi</h1>
      <ErrorBoundary>
        <Component />
      </ErrorBoundary>
    </>
  )
}

export default App
