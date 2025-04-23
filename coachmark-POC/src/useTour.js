import Shepherd from 'shepherd.js'
import 'shepherd.js/dist/css/shepherd.css'

export const useTour = () => {
  const tour = new Shepherd.Tour({
    defaultStepOptions: {
      scrollTo: true,
      highlightClass: 'custom-shepherd-highlight',
      classes: 'shepherd-theme-arrows'
    }
  })

  tour.addStep({
    id: 'step-1',
    title: 'Item 1',
    text: 'This is item 1',
    attachTo: { element: '.item-1', on: 'bottom' },
    buttons: [{ text: 'Next', action: tour.next }]
  })

  tour.addStep({
    id: 'step-2',
    title: 'Item 2',
    text: 'This is item 2',
    attachTo: { element: '.item-2', on: 'bottom' },
    buttons: [
      { text: 'Back', action: tour.back },
      { text: 'Next', action: tour.next }
    ]
  })

  tour.addStep({
    id: 'step-3',
    title: 'Item 3',
    text: 'This is item 3',
    attachTo: { element: '.item-3', on: 'bottom' },
    buttons: [
      { text: 'Back', action: tour.back },
      { text: 'Next', action: tour.next }
    ]
  })

  tour.addStep({
    id: 'step-4',
    title: 'Item 4',
    text: 'This is item 4',
    attachTo: { element: '.item-4', on: 'bottom' },
    buttons: [
      { text: 'Back', action: tour.back },
      { text: 'Next', action: tour.next }
    ]
  })

  tour.addStep({
    id: 'step-5',
    title: 'Item 5',
    text: 'This is item 5',
    attachTo: { element: '.item-5', on: 'bottom' },
    buttons: [
      { text: 'Finish', action: tour.complete }
    ]
  })

  return tour
}