import { writable, derived, get } from 'svelte/store'

const steps = writable([])
const c = writable(0)
const step = derived([ c, steps ], ([ $c, $steps ]) => {
  const nextIndex = Math.min(Math.max(0, $steps.length - 1), $c + 1)
  const next = nextIndex === $c ? false : $steps[nextIndex].id
  const previous = $c === 0 ? false : $steps[$c - 1].id
  const currentStep = $steps[$c] || {}

  return {
    index: $c,
    id: currentStep.id,
    name: currentStep.name,
    total: $steps.length,
    isLast: $c === $steps.length - 1,
    isFirst: $c === 0,
    next,
    previous
  }
})

function setup (value) {
  const built = value.map(v => ({ id: generateId(), ...v }))
  steps.set(built)
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
    const whereId = after || get(c)
    const position = orig.findIndex(o => o.id === whereId)
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

function to (id) {
  const all = get(steps)
  const pos = all.findIndex(s => s.id === id)
  pos > -1 && c.set(pos)
}

export {
  setup,
  steps,
  addStep,
  removeStep,
  hasStep,
  to,
  step
}
