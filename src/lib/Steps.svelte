<ol>
	{#each $steps as { id, name, icon }, i (i)}
	<Step
		{theme}
		{name}
		{icon}
		position={i}
		on:click={() => { dispatch('step', { id, i }) }}
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
</script>
