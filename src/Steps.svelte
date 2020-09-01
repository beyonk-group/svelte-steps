<ol>
	{#each $steps as { name, icon }, i (i)}
	<Step
		{theme}
		{name}
		{icon}
		complete={current === $steps.length || current > i}
		current={current !== $steps.length && current === i}
		on:click={() => { dispatch('step', { step: i }) }}
	/>
	{/each}
</ol>

<style>
	ol {
		display: flex;
		list-style-type: none;
		margin: 0;
		padding: 0;
	}
</style>

<script>
	import Step from './Step.svelte'
	import { steps } from './stores.js'
	import { createEventDispatcher } from 'svelte'

	const dispatch = createEventDispatcher()
	
	export let theme = [
		{ name: 'complete', value: { r: 6, g: 160, b: 146 } }
	]

	export let current = 0
</script>
