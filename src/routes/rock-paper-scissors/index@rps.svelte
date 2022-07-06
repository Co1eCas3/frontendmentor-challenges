<script>
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	import Score from './_components/Score.svelte';
	import Arena from './_components/arena/index.svelte';
	import RulesFooter from './_components/RulesFooter.svelte';
	import RulesModal from './_components/RulesModal.svelte';

	import { createModalStore } from './_stores/createModalStore';

	const modal = createModalStore();
	setContext('modal', modal);
	setContext('score', writable(0));
</script>

<Score />

<Arena />

<RulesFooter />

{#if $modal}
	<RulesModal />
{/if}
