import React from 'react'
import './App.css'

const TourStepContent = ({
  step,
  index,
  total,
  isLastStep,
  onNext,
  onSkip,
  tooltipProps,
}) => {
  const placement = step.placement || 'bottom'

  return (
    <div className={`tooltip-wrapper ${placement}`}>
      <div className="tooltip-description-wrapper">
        <div className="tooltip-header">
          <span className="tooltip-title">{step?.title}</span>
          <span className="tooltip-step">{index + 1}/{total}</span>
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
    </div>
  )
}

export default TourStepContent
