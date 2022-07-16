<svelte:head>
	<title>Interactive Comments Section</title>
</svelte:head>

<main>
	<slot />
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap');

	main {
		--ft-fam__main: 'Rubik', sans-serif;
		--ft-wt__lt: 400;
		--ft-wt__med: 500;
		--ft-wt__bold: 700;

		--clr-prim__blue: hsl(238, 40%, 52%);
		--clr-prim__red: hsl(358, 79%, 66%);
		--clr-prim__gray: hsl(239, 57%, 85%);
		--clr-prim__pink: hsl(357, 100%, 86%);

		--clr-neut__blue-dk: hsl(212, 24%, 26%);
		--clr-neut__blue-lt: hsl(211, 10%, 45%);
		--clr-neut__gray: hsl(223, 19%, 93%);
		--clr-neut__gray-lt: hsl(228, 33%, 97%);
		--clr-neut__wt: hsl(0, 0%, 100%);

		--radius__dulled: 0.3em;
		--radius__pronounced: 0.7em;

		position: relative;
		width: 100vw;
		min-height: 100vh;
		padding: 1rem 0 5rem 0;
		background-color: var(--clr-neut__gray-lt);
		font-family: var(--ft-fam__main);
		display: flex;
		justify-content: center;
	}

	main :global(.btn) {
		align-self: end;
		width: 12ch;
		padding: 0.8em;
		border-radius: var(--radius__dulled);
		background-color: var(--clr-prim__blue);
		color: var(--clr-neut__wt);
		font-size: 0.8em;
		font-weight: var(--ft-wt__med);
		text-align: center;
		letter-spacing: 0.075em;
		transition: opacity 0.15s;
	}

	main :global(.btn):hover,
	main :global(.btn):active,
	main :global(.btn):focus,
	main :global(.btn):focus-within {
		opacity: 0.5;
	}
</style>
