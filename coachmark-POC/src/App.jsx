import React, { useState, useEffect } from 'react'
import Joyride, { STATUS } from 'react-joyride'
import './App.css'
import TourStepContent from './TourStepContent'
import SpotlightOverlay from './SpotlightOverlay'

const App = () => {
  const [run, setRun] = useState(false)
  const [stepIndex, setStepIndex] = useState(0)
  const [spotlightStyle, setSpotlightStyle] = useState(null)

  const steps = [
    {
      target: '.item-1',
      content: 'This is the first item.',
      title: 'Item 1',
      placement: 'bottom',
      disableBeacon: true,
      spotlightRadius: 100,
    },
    {
      target: '.item-2',
      content: 'Check out this second item!',
      title: 'Item 2',
      placement: 'bottom',
      disableBeacon: true,
      spotlightRadius: 70,
    },
    {
      target: '.item-3',
      content: "Here's the third item.",
      title: 'Item 3',
      placement: 'bottom',
      disableBeacon: true,
      spotlightRadius: 60,
    },
    {
      target: '.item-4',
      content: "Don't miss this fourth item.",
      title: 'Item 4',
      placement: 'top',
      disableBeacon: true,
      spotlightRadius: 90,
    },
    {
      target: '.item-5',
      content: 'And finally, the fifth item!',
      title: 'Item 5',
      placement: 'top',
      disableBeacon: true,
      spotlightRadius: 80,
    },
  ]

  useEffect(() => {
    setRun(true)
  }, [])

  useEffect(() => {
    const currentStep = steps[stepIndex]
    if (!currentStep) return

    const el = document.querySelector(currentStep.target)
    if (el) {
      const rect = el.getBoundingClientRect()
      const radius = currentStep.spotlightRadius || 60
      setSpotlightStyle({
        top: rect.top + rect.height / 2 - radius,
        left: rect.left + rect.width / 2 - radius,
        size: radius * 2,
      })
    }
  }, [stepIndex])

  const handleJoyrideCallback = ({ status }) => {
    if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
      setRun(false)
      setStepIndex(0)
      setSpotlightStyle(null)
    }
  }

  const handleNext = () => {
    if (stepIndex < steps.length - 1) {
      setStepIndex(prev => prev + 1)
    } else {
      setRun(false)
      setStepIndex(0)
      setSpotlightStyle(null)
    }
  }

  const handleSkip = () => {
    setRun(false)
    setStepIndex(0)
    setSpotlightStyle(null)
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
        disableScrolling={true}
        callback={handleJoyrideCallback}
        tooltipComponent={props => (
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
            overlayColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 999,
          },
        }}
      />

      {run && spotlightStyle && (
        <SpotlightOverlay
          top={spotlightStyle.top}
          left={spotlightStyle.left}
          size={spotlightStyle.size}
        />
      )}

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