import { writable, derived, get } from 'svelte/store'

const steps = writable([])
const c = writable(0)
const step = derived([ c, steps ], ([ $c, $steps ]) => ({
  index: $c,
  id: $steps[$c].id,
  name: $steps[$c].name,
  total: $steps.length,
  isLast: $c === $steps.length - 1,
  isFirst: $c === 0
}))

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

function next () {
  const all = get(steps)
  const curr = get(c)
  const next = Math.min(curr + 1, all.length)
  to(next)
}

function previous () {
  const curr = get(c)
  const next = Math.max(curr - 1, 0)
  to(next)
}

function to (id) {
  const all = get(steps)
  const pos = all.findIndex(s => s.id === id)
  c.set(pos)
}

export {
  setup,
  steps,
  addStep,
  removeStep,
  hasStep,
  next,
  previous,
  to,
  step
}
