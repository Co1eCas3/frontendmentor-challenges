<script>
	import { getContext } from 'svelte';

	import CommentHeader from './CommentHeader.svelte';
	import CommentContent from './CommentContent.svelte';
	import CommentScore from './CommentScore.svelte';
	import CommentActions from './CommentActions.svelte';
	import NewCommentForm from './NewCommentForm.svelte';

	export let id, created, score, content, user, parent_id, replyingTo;

	const curUser = getContext('user');

	let userIsAuthor = user.id === $curUser.id;
	let editing = false;
	let replying = false;

	const cancelReplyFn = () => (replying = false);
</script>

<li>
	<article>
		<CommentHeader {...user} {created} {userIsAuthor} />

		<CommentContent {id} {content} {replyingTo} bind:editing />

		<CommentScore comment_id={id} {score} {editing} {userIsAuthor} />

		<CommentActions {id} {userIsAuthor} bind:editing bind:replying />
	</article>
</li>

{#if replying}
	<li>
		<NewCommentForm comment_id={id} {parent_id} replyingTo={user.username} {cancelReplyFn} />
	</li>
{/if}

<style>
	li {
		width: 100%;
	}

	article {
		border-radius: var(--radius__dulled);
		padding: 1rem;
		background-color: var(--clr-neut__wt);
		font-size: 1rem;
		font-weight: var(--ft-wt__lt);
		display: grid;
		grid:
			'header header' auto
			'content content' auto
			'action__score action__comment' auto
			/ auto;
		align-items: center;
		gap: 1em;
	}

	article :global(menu > *) {
		color: var(--clr-prim__blue);
		font-weight: var(--ft-wt__bold);
	}

	@media screen and (min-width: 35em) {
		article {
			grid:
				'action__score header . action__comment' auto
				'action__score content content content' auto
				/ auto;
		}
	}
</style>
