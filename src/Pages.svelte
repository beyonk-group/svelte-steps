<span class="current">{$current + 1}</span>
<span class="total">{$total}</span>

<style>
	.current::after {
    content: '/';
    margin-left: 4px;
  }
</style>

<script>
	import { current, total } from './stores.js'
</script>
