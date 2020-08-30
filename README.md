<p align="center">
  <img width="186" height="90" src="https://user-images.githubusercontent.com/218949/44782765-377e7c80-ab80-11e8-9dd8-fce0e37c235b.png" alt="Beyonk" />
</p>

## Svelte Steps

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com) [![Svelte v3](https://img.shields.io/badge/svelte-v3-blueviolet.svg)](https://svelte.dev)

Svelte Steps component

## Demo

```
npm i && npm run dev
```

## Usage

Documentation is a WIP. See the `example` directory for usage.

```
<Steps {current} {theme} />

<script>
	import { Steps, setup } from './Steps.svelte'
	import { UserIcon, CreditCardIcon, BriefcaseIcon } from 'svelte-feather-icons'
	
	setup([
		{ name: 'About You', icon: UserIcon },
		{ name: 'Payment', icon: CreditCardIcon },
		{ name: 'Confirmation', icon: BriefcaseIcon }
	])
	
	const theme = [
		{ name: 'complete', value: { r: 6, g: 160, b: 146 } }
	]

	let current = 0
</script>
```