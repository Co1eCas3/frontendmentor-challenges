<script>
	import { getContext } from 'svelte';

	export let comment_id = '';
	export let parent_id = '';
	export let replyingTo = '';

	parent_id = parent_id || comment_id;
	const isReplying = !!parent_id && !!replyingTo;
	const curUser = getContext('user');

	let newComment = '',
		editing = isReplying;
</script>

<form action="/comments-section" method="post" class:editing class:isReplying>
	<img src={$curUser.image.webp} alt="{$curUser.username} avatar" />

	<div
		contenteditable
		bind:textContent={newComment}
		class:placeholder={!newComment}
		on:focus={() => (editing = true)}
		on:blur={isReplying ? null : !!newComment ? null : () => (editing = false)}
	/>
	<input type="hidden" name="content" bind:value={newComment} />

	<input type="hidden" name="user_id" value={$curUser.id} />

	{#if parent_id && replyingTo}
		<input type="hidden" name="parent_id" value={parent_id} />
		<input type="hidden" name="replyingTo" value={replyingTo} />
	{/if}

	<button class="btn" type="submit">SEND</button>
</form>

<style>
	form {
		position: fixed;
		bottom: 0;
		z-index: 10;
		width: min(90%, 70ch);
		margin: 1rem auto;
		padding: 1em;
		border-radius: var(--radius__dulled);
		padding: 1rem;
		background-color: var(--clr-neut__wt);
		box-shadow: 1px 1px 4px rgba(8, 3, 12, 0.5);
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1em;
	}

	.isReplying {
		position: relative;
		bottom: initial;
		width: auto;
	}

	.editing {
		flex-wrap: wrap;
	}

	img {
		width: 2em;
	}

	.editing img {
		order: 2;
	}

	div {
		position: relative;
		flex-grow: 1;
		flex-basis: 100%;
		min-height: 1em;
		border: 1px solid var(--clr-neut__gray-lt);
		border-radius: var(--radius__pronounced);
		padding: 0.5em 1em;
	}

	.placeholder::before {
		content: 'Add a comment..';
		top: 0.5em;
		left: 1em;
		opacity: 0.4;
	}

	.editing div {
		order: 1;
		min-height: 4em;
	}

	.editing div:focus,
	.editing div:focus-within,
	.editing div:focus-active {
		outline: none;
		border-color: var(--clr-neut__blue-dk);
	}

	button {
		display: none;
		order: 3;
	}

	.editing button {
		display: block;
	}
</style>
