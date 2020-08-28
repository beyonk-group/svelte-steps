<ol>
	{#each $steps as { name, icon }, i (i)}
	<Step {theme} {name} {icon} complete={current > i} current={current === i} />
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
	
	export let theme = {}
	export let current = 0
</script>
