import React from 'react'
import './App.css'

const SpotlightOverlay = ({ top, left, size }) => {
  return (
    <div className="custom-overlay">
      <div
        className="circle-spotlight"
        style={{
          top: `${top}px`,
          left: `${left}px`,
          width: `${size}px`,
          height: `${size}px`,
        }}
      />
    </div>
  )
}

export default SpotlightOverlay