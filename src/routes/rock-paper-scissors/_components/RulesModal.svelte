<script>
	import { getContext } from 'svelte';
	const modal = getContext('modal');
</script>

<aside>
	<h2>RULES</h2>
	<img
		src="rock-paper-scissors/image-rules.svg"
		alt="Paper beats rock beats scissors beats paper"
	/>
	<button on:click={() => modal.close()}>&times;</button>
</aside>

<style>
	aside {
		position: absolute;
		z-index: 99;
		width: 100vw;
		height: 100vh;
		background-color: #fff;
		color: var(--ft-clr__dk);
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}

	button {
		opacity: 0.4;
		font-size: xx-large;
		transition: opacity 0.15s;
	}

	button:hover,
	button:active {
		opacity: 1;
	}

	@media screen and (min-width: 50rem) {
		aside {
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			width: min-content;
			height: min-content;
			margin: auto;
			border-radius: 0.75rem;
			padding: 1.5rem;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: space-between;
			gap: 2rem;
		}

		h2 {
			order: 1;
		}

		button {
			order: 2;
		}

		img {
			order: 3;
		}
	}
</style>
