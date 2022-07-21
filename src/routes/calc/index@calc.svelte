<script>
	import Header from './_components/Header.svelte';
	import Output from './_components/Output.svelte';
	import Calculator from './_components/Calculator.svelte';
</script>

<main>
	<Header />

	<Output />

	<Calculator />
</main>

<style>
	main {
		width: min(100%, 30em);
		padding: 1.5em;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		gap: 2em;
	}
</style>
