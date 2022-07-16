<svelte:head>
	<title>Expense Chart Component</title>
	<style>
		body {
			background-color: hsl(27, 66%, 92%); /* var(--clr__neut-cream); */
		}
	</style>
</svelte:head>

<main>
	<slot />
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap');

	main {
		--clr__prim-red: hsl(10, 79%, 65%);
		--clr__prim-cyan: hsl(186, 34%, 60%);
		--clr__neut-dk-brown: hsl(25, 47%, 15%);
		--clr__neut-med-brown: hsl(28, 10%, 53%);
		--clr__neut-cream: hsl(27, 66%, 92%);
		--clr__neut-pale-orange: hsl(33, 100%, 98%);

		--ft-fam__main: 'DM Sans', sans-serif;
		--ft-sz__main: 1.125rem;
		--ft-sz__def: 0.8em;
		--ft-sz__desc: 1.3em;
		--ft-sz__emph: 1.5em;
		--ft-wt__norm: 400;
		--ft-wt__bold: 700;

		width: 100vw;
		padding-top: 3rem;
		display: flex;
		justify-content: center;
	}
</style>
