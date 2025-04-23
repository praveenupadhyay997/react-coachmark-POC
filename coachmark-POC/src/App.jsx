import React, { useState, useEffect } from 'react'
import Joyride, { STATUS } from 'react-joyride'
import './App.css'
import TourStepContent from './TourStepContent'

const App = () => {
  const [run, setRun] = useState(false)
  const [stepIndex, setStepIndex] = useState(0)

  const steps = [
    { target: '.item-1', content: 'This is the first item.', title: 'Item 1', placement: 'bottom', disableBeacon: true },
    { target: '.item-2', content: 'Check out this second item!', title: 'Item 2', placement: 'bottom', disableBeacon: true },
    { target: '.item-3', content: "Here's the third item in our grid.", title: 'Item 3', placement: 'bottom', disableBeacon: true },
    { target: '.item-4', content: "Don't miss this fourth item.", title: 'Item 4', placement: 'top', disableBeacon: true },
    { target: '.item-5', content: 'And finally, the fifth item!', title: 'Item 5', placement: 'top', disableBeacon: true },
  ]

  useEffect(() => {
    setRun(true)
  }, [])

  const handleJoyrideCallback = ({ status }) => {
    if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
      setRun(false)
      setStepIndex(0)
    }
  }

  const handleNext = () => {
    if (stepIndex < steps.length - 1) {
      setStepIndex(prev => prev + 1)
    } else {
      setRun(false)
      setStepIndex(0)
    }
  }

  const handleSkip = () => {
    setRun(false)
    setStepIndex(0)
  }

  return (
    <>
      <Joyride
        steps={steps}
        run={run}
        stepIndex={stepIndex}
        continuous={false}
        showSkipButton={false}
        showProgress
        disableOverlayClose
        showDefaultBeacon={false}
        scrollToFirstStep
        scrollOffset={100}
        callback={handleJoyrideCallback}
        tooltipComponent={(props) => (
          <TourStepContent
            {...props}
            total={steps.length}
            onNext={handleNext}
            onSkip={handleSkip}
            isLastStep={stepIndex === steps.length - 1}
          />
        )}
        styles={{
          options: {
            overlayColor: 'rgba(31, 45, 61, 0.5)',
            primaryColor: '#A77BCA',
            textColor: '#1F2D3D',
            zIndex: 1000,
            arrowColor: 'transparent',
          },
          spotlight: {
            borderRadius: '50%',
            boxShadow: '0 0 0 5px rgba(255, 255, 255, 0.3)',
          },
        }}
      />

      <div className="wrapper">
        <div className="item-1">1</div>
        <div className="item-2">2</div>
        <div className="item-3">3</div>
        <div className="item-4">4</div>
        <div className="item-5">5</div>
      </div>
    </>
  )
}

export default App
