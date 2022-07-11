<script>
	import { modal } from '../_stores/modal';

	export let id;
	export let userIsAuthor;
	export let editing;
	export let replying;
</script>

<menu class="action__comment">
	{#if userIsAuthor}
		<li>
			<button class="delete" on:click={() => modal.open(id)}>
				<img src="/comments-section/icon-delete.svg" alt="Delete comment" />
				Delete
			</button>
		</li>

		{#if editing}
			<li>
				<button on:click={() => (editing = false)}>&otimes; Cancel</button>
			</li>
		{:else}
			<li>
				<button disabled={editing} on:click={() => (editing = true)}>
					<img src="/comments-section/icon-edit.svg" alt="Edit comment" />
					Edit
				</button>
			</li>
		{/if}
	{:else}
		<li>
			<button on:click={() => (replying = true)}>
				<img src="/comments-section/icon-reply.svg" alt="Reply arrow" />
				Reply
			</button>
		</li>
	{/if}
</menu>

<style>
	menu {
		width: max-content;
		grid-area: action__comment;
		justify-self: end;
		display: flex;
	}

	button {
		color: var(--clr-prim__blue);
		font-weight: var(--ft-wt__bold);
		transition: opacity 0.15s;
	}

	button:hover,
	button:active {
		opacity: 0.5;
	}

	button:last-of-type {
		margin-left: 1em;
	}

	.delete {
		color: var(--clr-prim__red);
	}
</style>
