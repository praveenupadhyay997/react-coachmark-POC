import './App.css'

const TourStepContent = ({
  step,
  index,
  total,
  isLastStep,
  onNext,
  onSkip,
}) => {
  return (
    <div className="tooltip-wrapper">
      <div className='tooltip-description-wrapper'>
        <div className="tooltip-header">
          <span>{step?.title}</span>
          <span>{index + 1}/{total}</span>
        </div>
        <div className="tooltip-desc">{step?.content}</div>
      </div>
      <div className="custom-footer">
        {!isLastStep && <button className="custom-skip" onClick={onSkip}>Skip</button>}
        <button className="custom-next" onClick={onNext}>
          {isLastStep ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  )
}

export default TourStepContent
