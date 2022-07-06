<script>
	import { getContext } from 'svelte';

	const score = getContext('score');
</script>

<header>
	<h1>
		<b>ROCK</b>
		<b>PAPER</b>
		<b>SCISSORS</b>
	</h1>

	<dl>
		<dt>SCORE</dt>
		<dd>
			<data>{$score}</data>
		</dd>
	</dl>
</header>

<style>
	header {
		width: min(80%, 45rem);
		flex-basis: 10%;
		margin: 2rem auto;
		padding: 0.6em 1rem;
		border: 3px solid var(--outline);
		border-radius: 0.3rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	h1 {
		font-family: var(--ft-fam__main);
		font-size: 1.25rem;
		color: #fff;
		display: flex;
		flex-direction: column;
	}

	b {
		padding: 0;
		line-height: 1em;
	}

	b:not(:last-of-type) {
		margin-bottom: -0.25em;
	}

	dl {
		border-radius: 0.25em;
		padding: 0.6em 1.25em;
		background-color: #fff;
		color: var(--ft-clr__dk);
		display: flex;
		flex-direction: column;
		place-content: center;
		place-items: center;
	}

	dt {
		font-size: 0.65em;
		letter-spacing: 0.15em;
	}

	dd {
		font-size: 2em;
		font-weight: var(--ft-wt__bold);
	}
</style>
