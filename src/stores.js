import { writable } from 'svelte/store'

const steps = writable()

function setup (value) {
  steps.set(value)
}

export {
  setup,
  steps
}
