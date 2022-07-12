<script>
	import { countdown } from '../_stores/countdown';

	import Digit from './Digit.svelte';
</script>

<ol>
	{#each $countdown as val, i (i)}
		{@const zeroFilledVal = val < 10 ? `0${val}` : val}
		<li>
			<Digit position={i} val={zeroFilledVal} />
		</li>
	{/each}
</ol>

<style>
	ol {
		display: flex;
		gap: 1em;
	}
</style>
