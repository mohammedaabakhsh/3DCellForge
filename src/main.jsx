import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }
  static getDerivedStateFromError(error) {
    return { error }
  }
  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: '40px', fontFamily: 'monospace', background: '#fff', color: '#333' }}>
          <h2 style={{ color: 'red' }}>App Error</h2>
          <pre style={{ whiteSpace: 'pre-wrap', color: 'red' }}>{String(this.state.error)}</pre>
          <pre style={{ whiteSpace: 'pre-wrap', fontSize: '12px' }}>{this.state.error?.stack}</pre>
        </div>
      )
    }
    return this.props.children
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
