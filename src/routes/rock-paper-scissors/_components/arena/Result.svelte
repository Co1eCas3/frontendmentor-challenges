<script>
	import Icon from './Icon.svelte';
	export let playerPick;
	export let computerPick;

	computerPick = ['scissors', 'paper', 'rock'][Math.floor(Math.random() * 3)];
</script>

<figure>
	<dl>
		<dt>YOU PICKED</dt>
		<dd><Icon opt={playerPick} /></dd>
	</dl>
	<dl>
		<dt>THE HOUSE PICKED</dt>
		<dd><Icon opt={computerPick} /></dd>
	</dl>
</figure>

<style>
	figure {
		width: 100%;
		display: flex;
		justify-content: center;
		gap: 3em;
	}

	dl {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2em;
	}

	dt {
		order: 2;
		font-size: 0.9em;
		letter-spacing: 0.15em;
	}

	dd {
		order: 1;
	}
</style>
