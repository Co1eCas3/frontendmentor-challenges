<script>
	import { getContext } from 'svelte';

	import Pick from './Pick.svelte';
	import Result from './Result.svelte';

	const score = getContext('score');
	let playerPick = null;
	let computerPick = null;

	const winMap = {
		rock: 'scissors',
		paper: 'rock',
		scissors: 'paper'
	};

	$: tie = playerPick === computerPick;
	$: win = winMap[playerPick] === computerPick;

	$: resultText = tie ? 'TIED' : win ? 'WIN' : 'LOSE';

	const doScore = () => {
		$score += tie ? 0 : win ? 1 : -1;
		return '';
	};
	const reset = () => (playerPick = computerPick = null);
</script>

<section>
	{#if !playerPick}
		<Pick bind:playerPick />
	{:else}
		<Result {playerPick} bind:computerPick />
	{/if}

	{#if !!playerPick && !!computerPick}
		{doScore()}
		<div>
			<h2>YOU {resultText}</h2>
			<button on:click={reset}>PLAY AGAIN</button>
		</div>
	{/if}
</section>

<style>
	section {
		width: min(100%, 30rem);
		flex-basis: 65%;
		color: #fff;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		gap: 3rem;
	}

	div {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1em;
	}

	h2 {
		font-size: 3em;
	}

	button {
		width: 50%;
		border-radius: 0.25em;
		padding: 0.75em;
		background-color: #fff;
		font-family: inherit;
		letter-spacing: 0.1em;
		color: var(--ft-clr__dk);
	}

	@media screen and (min-width: 50rem) {
		section {
			margin-bottom: 3em;
			justify-content: flex-start;
		}
	}
</style>
