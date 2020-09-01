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

## About

Demonstrates progress in a multi-step process in your application, such as a payment flow.

* Current step is denoted by the `current` variabble
* If the current step is the last step, the steps component shows as fully complete.

## Usage

Install the library

```
npm i --save-dev @beyonk/svelte-steps
```

See the `example` directory for an example.

1. Import the `Steps` component and the `setup` function from the library.
1. Configure the `Steps` component by passing an array of step names and icons
1. Configure the `theme` option by setting an rgb colour value for the `complete` theme variable
1. Set the current step by passing it's array index. Usually 0.
1. Add the `<Steps>` component to your page, and pass it the theme, and the current attributes.

To change the step, set the value of `current`.

```
<Steps {current} {theme} />

<script>
	import { Steps, setup } from '@beyonk/svelte-steps'
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

