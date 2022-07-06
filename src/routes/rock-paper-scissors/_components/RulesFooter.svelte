<script>
	import { getContext } from 'svelte';

	const modal = getContext('modal');
</script>

<footer>
	<button on:click={() => modal.open()}>RULES</button>
</footer>

<style>
	footer {
		width: 100%;
		flex-basis: 25%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	button {
		border: 3px solid var(--outline);
		border-radius: 0.75em;
		padding: 0.6em 2.5em;
		font-family: inherit;
		font-weight: var(--ft-wt__semi-bold);
		letter-spacing: 0.15em;
		color: #fff;
	}

	@media screen and (min-width: 50rem) {
		footer {
			position: absolute;
			bottom: 0;
			right: 0;
			width: max-content;
			padding: 1em;
		}
	}
</style>
