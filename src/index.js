import Steps from './Steps.svelte'
import Pages from './Pages.svelte'
import { setup, current, addStep, removeStep, total } from './stores.js'

export {
  Steps,
  Pages,
  setup,
  addStep,
  removeStep,
  current,
  total
}
