<script>
	import { modal } from '../_stores/modal';
</script>

<aside on:click={() => modal.close()}>
	<form action="/comments-section?_method=DELETE" method="post">
		<input type="hidden" name="comment_id" value={$modal.id} />
		<h3>Delete Comment?</h3>
		<p>This action is permanent. Are you sure you want to delete the comment?</p>
		<menu>
			<button type="button" on:click={() => modal.close()}> NO, CANCEL </button>
			<button type="submit" on:click|stopPropagation> YES, DELETE </button>
		</menu>
	</form>
</aside>

<style>
	aside {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
		width: 100vw;
		height: 100vh;
		background-color: rgba(8, 3, 12, 0.4);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	form {
		max-width: 30ch;
		border-radius: var(--radius__pronounced);
		padding: 1.5em;
		background-color: var(--clr-neut__wt);
		color: var(--clr-neut__blue-dk);
		display: flex;
		flex-direction: column;
		gap: 1em;
	}

	menu {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}

	button {
		border-radius: var(--radius__dulled);
		padding: 0.5em 1em;
		color: var(--clr-neut__wt);
		font-family: inherit;
		font-size: 0.8em;
		font-weight: var(--ft-wt__bold);
	}

	[type='button'] {
		background-color: var(--clr-prim__gray);
	}

	[type='submit'] {
		background-color: var(--clr-prim__red);
	}
</style>
