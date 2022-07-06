<script>
	import Icon from './Icon.svelte';

	export let playerPick;

	const doPick = (pick) => (playerPick = pick);
</script>

<figure>
	{#each ['paper', 'scissors', 'rock'] as icon}
		<Icon opt={icon} on:touchend={doPick.bind(null, icon)} on:click={doPick.bind(null, icon)} />
	{/each}
</figure>

<style>
	figure {
		width: 100%;
		background-image: url('rock-paper-scissors/bg-triangle.svg');
		background-repeat: no-repeat;
		background-origin: center;
		background-position: center;
		background-size: 50%;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 5em;
	}
</style>
