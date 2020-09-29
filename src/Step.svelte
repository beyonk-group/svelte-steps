<li>
	<div class="block" class:complete={isComplete} class:current={isCurrent}>
		<div class="stepper left"></div>
		<div class="icon">
			<svelte:component this={icon} />
		</div>
		<div class="stepper right"></div>
	</div>
	<span class="step-name">{name}</span>
</li>

<style>
	li {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		flex: 1;
	}
	
	.block > .icon {
		border: 1px solid grey;
		border-radius: 50%;
		padding: 6px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.block.current > .icon {
		box-shadow: 0 0 0 0 var(--bos-steps-c-complete);
		transform: scale(1);
		animation: pulse 2s infinite;
	}
	
	.block.complete > .icon {
		border-color: var(--bos-steps-c-complete);
	}
	
	.block > .icon > :global(svg) {
		height: 24px;
		width: 24px;
		stroke: grey;
	}
	
	.block.complete > .icon > :global(svg) {
		stroke: var(--bos-steps-c-complete);
	}
	
	li > .block {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		flex: 1 0 auto;
		width: 100%;
	}
	
	.stepper {
		height: 4px;
		background-color: grey;
		display: flex;
		flex: 1;
	}
	
	.block.complete .stepper.left,
	.block.current .stepper.left {
		background-color: var(--bos-steps-c-complete);
	}
	
	.block.complete  .stepper.right {
		background-color: var(--bos-steps-c-complete);
	}
	
	li:first-of-type .block .stepper.left {
		background-color: transparent;
	}
	
	li:last-of-type .block .stepper.right {
		background-color: transparent;
	}
	
	.step-name {
    margin-top: 3px;
		font-size: 14px;
	}
	
	@keyframes pulse {
		0% {
			transform: scale(0.95);
			box-shadow: 0 0 0 0 var(--bos-steps-c-complete-lighter);
		}

		70% {
			transform: scale(1);
			box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
		}

		100% {
			transform: scale(0.95);
			box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
		}
	}
</style>

<script>
	import { onMount } from 'svelte'
	import { current, steps } from './stores.js'
	
	export let name
	export let icon
	export let theme
	export let position

	$: isCurrent = $current !== $steps.length - 1 && $current === position
	$: isComplete = $current === $steps.length - 1 || $current > position

	onMount(() => {
	  theme.forEach(({ name, value }) => {
	    const { r, g, b } = value
	    document.documentElement.style.setProperty(`--bos-steps-c-${name}`, `rgba(${r}, ${g}, ${b}, 1)`)
	    document.documentElement.style.setProperty(`--bos-steps-c-${name}-lighter`, `rgba(${r}, ${g}, ${b}, 0.7)`)
	  })
	})
</script>