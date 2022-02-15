import Steps from './Steps.svelte'
import Pages from './Pages.svelte'
import { setup, step, addStep, removeStep, hasStep, next, previous, to } from './stores.js'

export {
  Steps,
  Pages,
  setup,
  addStep,
  removeStep,
  hasStep,
  next,
  previous,
  to,
  step
}
