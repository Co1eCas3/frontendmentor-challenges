<script>
	import Nav from './_components/Nav.svelte';
</script>

<svelte:head>
	<title>Room Homepage</title>
</svelte:head>

<div class="wrapper">
	<Nav />

	<slot />
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@500;600;700&display=swap');

	.wrapper {
		--clr__blk: hsl(0, 0%, 0%);
		--clr__wt: hsl(0, 0%, 100%);

		--ft-fam__main: 'League Spartan', sans-serif;
		--ft-wt__norm: 500;
		--ft-wt__med: 600;
		--ft-wt__bold: 700;
		--ft-clr__header: hsl(0, 0%, 27%);
		--ft-clr__body: hsl(0, 0%, 63%);

		width: 100%;
		font-family: var(--ft-fam__main);
		font-size: clamp(14px, 2vw, 16px);
		overflow: hidden;
	}
</style>
