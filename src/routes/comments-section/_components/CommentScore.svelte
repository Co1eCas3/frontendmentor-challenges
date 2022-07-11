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
	<menu class="action__score">
		<button class="plus" disabled={userIsAuthor} on:click={() => updateScore(1)}>
			<PlusIcon />
		</button>
		<data>{score}</data>
		<button class="minus" disabled={userIsAuthor} on:click={() => updateScore(-1)}>
			<MinusIcon />
		</button>
	</menu>
{/if}

<style>
	[class^='action'] > * {
		color: var(--clr-prim__blue);
		font-weight: var(--ft-wt__bold);
	}

	.action__score {
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

	.action__score button {
		width: 1em;
		height: 1em;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.action__score :global(svg) {
		fill: var(--clr-prim__gray);
		transition: fill 0.15s;
	}

	.action__score button:not([disabled]):hover :global(svg),
	.action__score button:not([disabled]):active :global(svg) {
		fill: var(--clr-prim__blue);
	}

	@media screen and (min-width: 35em) {
		.action__score {
			align-self: start;
			flex-direction: column;
			padding: 1em 0.5em;
		}
	}
</style>
