<script>
	import PlusIcon from './icons/Plus.svelte';
	import MinusIcon from './icons/Minus.svelte';

	export let comment_id;
	export let score = 0;
	export let editing;
	export let userIsAuthor;

	async function updateScore(val) {
		const res = await fetch(`/comments-section/score?comment_id=${comment_id}&val=${val}`);
		const { score: newScore } = await res.json();

		if (res.status === 200) score = newScore;
	}
</script>

{#if !editing}
	<menu>
		<li>
			<button disabled={userIsAuthor} on:click={() => updateScore(1)}>
				<PlusIcon />
			</button>
		</li>
		<li>
			<data>{score}</data>
		</li>
		<li>
			<button disabled={userIsAuthor} on:click={() => updateScore(-1)}>
				<MinusIcon />
			</button>
		</li>
	</menu>
{/if}

<style>
	menu {
		grid-area: action__score;
		width: max-content;
		height: max-content;
		border-radius: var(--radius__pronounced);
		padding: 0.5em 1rem;
		background-color: var(--clr-neut__gray);
		display: flex;
		justify-content: space-around;
		align-items: center;
		gap: 0.5em;
	}

	button {
		width: 1em;
		height: 1em;
		color: var(--clr-prim__blue);
		font-weight: var(--ft-wt__bold);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	menu :global(svg) {
		fill: var(--clr-prim__gray);
		transition: fill 0.15s;
	}

	button:not([disabled]):hover :global(svg),
	button:not([disabled]):active :global(svg) {
		fill: var(--clr-prim__blue);
	}

	@media screen and (min-width: 35em) {
		menu {
			align-self: start;
			flex-direction: column;
			padding: 1em 0.5em;
		}
	}
</style>
