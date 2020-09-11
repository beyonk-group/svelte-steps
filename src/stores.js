import { writable, derived, get } from 'svelte/store'

const steps = writable([])
const current = writable(0)
const total = derived(steps, $steps => $steps.length)

function setup (value) {
  steps.set(value)
}

function addStep (step, position) {
  const pos = position === undefined ? get(current) : position
  steps.update(s => {
    const orig = [ ...s]
    orig.splice(pos, 0, step)
    return orig
  })
}

export {
  setup,
  steps,
  current,
  addStep,
  total
}
