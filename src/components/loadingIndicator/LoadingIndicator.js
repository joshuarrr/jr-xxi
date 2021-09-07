import React from 'react'

// styles
import './LoadingIndicator.css';


const LoadingIndicator = () =>
  <div
    className="loading-indicator"
    style={{ opacity: '1' }}
  >
    <div className="node-1" />
    <div className="node-2" />
    <div className="node-3" />
  </div>

export default LoadingIndicator
