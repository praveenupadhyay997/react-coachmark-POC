import React from 'react'
import './Tooltip.css'

const Tooltip = ({ stepIndex, total, onNext, onSkip, isLastStep, step }) => {
  const placement = step.placement || 'bottom'

  const arrowStyles = {
    position: 'absolute',
    left: step?.leftArrow,
    transform: 'translateX(-50%)',
    width: 0,
    height: 0,
    borderLeft: '8px solid transparent',
    borderRight: '8px solid transparent',
  }

  // Arrow positioning based on placement
  if (placement === 'top') {
    arrowStyles.borderTop = '8px solid white'
    arrowStyles.top = '100%'
  } else if (placement === 'bottom') {
    arrowStyles.borderBottom = '8px solid white'
    arrowStyles.bottom = '100%'
  }

  return (
    <div className={`tooltip-wrapper ${placement}`}>
      <div className="tooltip-description-wrapper">
        <div className="tooltip-header">
          <span className="tooltip-title">{step?.title}</span>
          <span className="tooltip-step">{stepIndex + 1}/{total}</span>
        </div>

        <div className="tooltip-desc">{step?.content}</div>

        <div className="custom-footer">
          {!isLastStep && (
            <button className="custom-skip" onClick={onSkip}>
              Skip
            </button>
          )}
          <button className="custom-next" onClick={onNext}>
            {isLastStep ? 'Finish' : 'Next'}
          </button>
        </div>
      </div>

      {/* Custom arrow */}
      <div className="custom-arrow" style={arrowStyles} />
    </div>
  )
}

export default Tooltip