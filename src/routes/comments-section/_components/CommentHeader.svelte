<script>
	import { readableTimeSince } from '$lib/utils';

	export let id;
	export let username;
	export let image;
	export let created;
	export let userIsAuthor;
</script>

<header>
	<img src={image.webp} alt="{username} avatar" />
	<h3 class:userIsAuthor>{username}</h3>
	<time datetime={created}>{readableTimeSince(new Date(created))}</time>
</header>

<style>
	header {
		width: max-content;
		grid-area: header;
		display: flex;
		align-items: center;
		gap: 1em;
	}

	header h3 {
		position: relative;
		font-weight: var(--ft-wt__bold);
	}

	.userIsAuthor::after {
		content: 'you';
		position: relative;
		top: 0;
		right: -1ch;
		border-radius: var(--radius__dulled);
		padding: 0.25ch 1ch;
		background-color: var(--clr-prim__blue);
		font-size: 0.6em;
		font-weight: var(--ft-wt__lt);
		color: var(--clr-neut__wt);
	}

	header img {
		width: 2em;
	}
</style>
