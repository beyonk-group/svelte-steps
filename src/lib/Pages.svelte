<span class="current">{$step.index + 1}</span>
<span class="total">{$step.total}</span>

<style>
	.current::after {
    content: '/';
    margin-left: 4px;
  }
</style>

<script>
	import { step } from './stores.js'
</script>
