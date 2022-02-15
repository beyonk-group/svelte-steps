import { writable, derived, get } from 'svelte/store'

const steps = writable([])
const current = writable(0)
const total = derived(steps, $steps => $steps.length)

function setup (value) {
  steps.set(value.map(v => ({ id: generateId(), ...v })))
}

function hasStep (id) {
  const known = get(steps)
  return known.findIndex(k => k.id === id) > -1
}

function generateId () {
  return `step_${Math.random().toString(36).slice(2, 9)}`
}

function addStep (step, after = false, id = generateId()) {
  const newStep = { ...step, id }
  steps.update(s => {
    const orig = [ ...s ]
    const position = orig.findIndex(o => o.id === after)
    orig.splice(position + 1, 0, newStep)
    return orig
  })
}

function removeStep (id) {
  steps.update(s => {
    const orig = [ ...s ]
    const position = orig.findIndex(o => o.id === id)
    orig.splice(position, 1)
    return orig
  })
}

export {
  setup,
  steps,
  current,
  addStep,
  removeStep,
  hasStep,
  total
}
