<script>
	export let id;
	export let content;
	export let editing;
	export let replyingTo;

	let updatedContent = content;
	$: hasEdited = updatedContent !== content;
</script>

{#if editing}
	<form action="/comments-section?_method=PUT&id={id}" method="post">
		<div contenteditable autofocus tabindex="1" bind:textContent={updatedContent} />
		<input type="hidden" name="content" bind:value={updatedContent} />

		<button class="btn" type="submit" tabindex="2" disabled={!hasEdited}>UPDATE</button>
	</form>
{:else}
	<p>
		{#if replyingTo}
			<span>@{replyingTo}</span>
		{/if}
		{content}
	</p>
{/if}

<style>
	form {
		grid-area: content;
		display: flex;
		flex-direction: column;
		gap: 1em;
	}

	div {
		border: 1px solid var(--clr-neut__gray-lt);
		border-radius: var(--radius__pronounced);
		padding: 0.5em 1em;
	}

	div:focus,
	div:focus-within {
		border: 1px solid var(--clr-neut__blue-dk);
		outline: none;
	}

	p {
		grid-area: content;
	}

	span {
		color: var(--clr-prim__blue);
		font-weight: var(--ft-wt__bold);
	}
</style>
