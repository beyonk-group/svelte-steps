<script>
  import { Steps, setup } from '../src/index.js'
  import { UserIcon, CreditCardIcon, BriefcaseIcon } from 'svelte-feather-icons'
	
	const theme = [
		{ name: 'complete', value: { r: 6, g: 160, b: 146 } }
	]

  setup([
		{ name: 'About You', icon: UserIcon },
		{ name: 'Payment', icon: CreditCardIcon },
		{ name: 'Confirmation', icon: BriefcaseIcon }
  ])
  
  let current = 0
</script>

<section>
  <Steps {current} />

  <div>
    <button class="Back" on:click={() => current = Math.max(current - 1, 0)}>Back</button>
    <button class="Next" on:click={() => current = Math.min(current + 1, 2)}>Next</button>
  </div>
</section>

<style>
  section {
    max-width: 60%;
    margin: 48px auto;
  }

  div {
    display: flex;
    justify-content: center;
    margin: 48px auto;
  }

  button {
    padding: 6px 12px;
    font-weight: bold;
    margin: 6px;
    background-color: blueviolet;
    border: 0;
    border-radius: 5px;
    color: white;
    font-size: 18px;
  }
</style>