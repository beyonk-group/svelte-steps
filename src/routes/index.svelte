<script>
  import { Steps, Pages, setup, step, addStep, removeStep } from '$lib'
  import { steps, to } from '$lib/stores.js'
  import { UserIcon, CreditCardIcon, BriefcaseIcon, StarIcon } from 'svelte-feather-icons'
	
	const theme = [
		{ name: 'complete', value: { r: 6, g: 160, b: 146 } }
	]

  setup([
		{ id: 'about', name: 'About You', icon: UserIcon },
		{ id: 'payment', name: 'Payment', icon: CreditCardIcon },
    { id: 'confirmation', name: 'Confirmation', icon: BriefcaseIcon }
  ])

  let after
</script>

<section>
  <Steps {theme} />

  <p>Step: <Pages /></p>

  <pre>
    {JSON.stringify($step, null, 2)}
  </pre>

  <div>
    <button class="button" on:click={() => to($step.previous)}>Back</button>
    <div class="button">
      <button on:click={() => addStep({ name: 'New Step', icon: StarIcon }, after)}>
      Add Step after
      </button>
      <select bind:value={after}>
        {#each $steps as { name, id }}
        <option value={id}>{name}</option>
        {/each}
      </select>
    </div>
    <div class="button">
      <button on:click={() => removeStep(after)}>
      Remove Step at
      </button>
      <select bind:value={after}>
        {#each $steps as { name, id }}
        <option value={id}>{name}</option>
        {/each}
      </select>
    </div>
    <button class="button" on:click={() => to($step.next)}>Next</button>
  </div>
</section>

<style>
  section {
    max-width: 60%;
    margin: 48px auto;
  }

  p {
    text-align: center;
  }

  div {
    display: flex;
    justify-content: center;
    margin: 48px auto;
  }

  .button {
    padding: 6px 12px;
    margin: 6px;
    background-color: blueviolet;
    border: 0;
    border-radius: 5px;
  }

  .button,
  button {
    font-weight: bold;
    color: white;
    font-size: 18px;
  }

  .button > button {
    background-color: transparent;
    border: 0;
  }
</style>