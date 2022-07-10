<script>
	import { modal } from '../_stores/modal';

	export let id;
	export let userIsAuthor;
	export let editing;
	export let replying;
</script>

<menu class="action__comment">
	{#if userIsAuthor}
		<button class="delete" on:click={() => modal.open(id)}>
			<img src="/comments-section/icon-delete.svg" alt="Delete comment" />
			Delete
		</button>

		{#if editing}
			<button class="edit" on:click={() => (editing = false)}>&otimes; Cancel</button>
		{:else}
			<button class="edit" disabled={editing} on:click={() => (editing = true)}>
				<img src="/comments-section/icon-edit.svg" alt="Edit comment" />
				Edit
			</button>
		{/if}
	{:else}
		<button class="reply" on:click={() => (replying = true)}>
			<img src="/comments-section/icon-reply.svg" alt="Reply arrow" />
			Reply
		</button>
	{/if}
</menu>

<style>
	[class^='action'] > * {
		color: var(--clr-prim__blue);
		font-weight: var(--ft-wt__bold);
	}

	.action__comment {
		width: max-content;
		grid-area: action__comment;
		justify-self: end;
	}

	.action__comment button {
		transition: opacity 0.15s;
	}

	.action__comment button:hover,
	.action__comment button:active {
		opacity: 0.5;
	}

	.action__comment button:last-of-type {
		margin-left: 1em;
	}

	.delete {
		color: var(--clr-prim__red);
	}
</style>
