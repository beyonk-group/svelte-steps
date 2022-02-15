<script>
  import { Steps, Pages, setup, current, addStep, removeStep, total } from '$lib'
  import { steps } from '$lib/stores.js'
  import { UserIcon, CreditCardIcon, BriefcaseIcon, StarIcon } from 'svelte-feather-icons'
	
	const theme = [
		{ name: 'complete', value: { r: 6, g: 160, b: 146 } }
	]

  setup([
		{ name: 'About You', icon: UserIcon },
		{ name: 'Payment', icon: CreditCardIcon },
    { name: 'Confirmation', icon: BriefcaseIcon }
  ])

  let after
</script>

<section>
  <Steps {theme} />

  <p>Step: <Pages /></p>

  <div>
    <button class="button" on:click={() => $current = Math.max($current - 1, 0)}>Back</button>
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
    <button class="button" on:click={() => $current = Math.min($current + 1, $total - 1)}>Next</button>
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

  input {
    height: 20px;
    width: 30px;
    text-align: center;
    font-weight: bold;
  }
</style>