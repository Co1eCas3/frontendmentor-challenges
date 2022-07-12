<script>
	import { countdown } from '../_stores/countdown';

	import Digit from './Digit.svelte';
</script>

<ol>
	{#each $countdown as val, i (i)}
		<li>
			<Digit position={i} {val} />
		</li>
	{/each}
</ol>

<style>
	ol {
		display: flex;
		gap: 1em;
	}
</style>
