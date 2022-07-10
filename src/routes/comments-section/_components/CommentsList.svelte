<script>
	import Comment from './Comment.svelte';

	export let comments;
</script>

<ul>
	{#each comments as _comment}
		{@const { replies, ...comment } = _comment}
		<Comment {...comment} />

		{#if replies}
			<li>
				<svelte:self comments={replies} />
			</li>
		{/if}
	{/each}
</ul>

<style>
	ul {
		width: min(100%, 70ch);
		margin: 0 auto;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.7rem;
	}

	li > :global(ul) {
		position: relative;
		padding: 0;
		padding-left: clamp(1rem, 4vw, 8rem);
	}

	li > :global(ul::before) {
		top: 0;
		left: min(5em, 1vw);
		width: 1px;
		height: 100%;
		background-color: var(--clr-neut__gray);
	}
</style>
