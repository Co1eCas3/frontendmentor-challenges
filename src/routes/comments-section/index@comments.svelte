<script>
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	import { modal } from './_stores/modal';

	import CommentsList from './_components/CommentsList.svelte';
	import NewCommentForm from './_components/NewCommentForm.svelte';
	import Modal from './_components/Modal.svelte';

	export let comments;
	export let user;

	setContext('user', writable(user));
</script>

<CommentsList {comments} />
<NewCommentForm />

{#if $modal.open}
	<Modal />
{/if}
