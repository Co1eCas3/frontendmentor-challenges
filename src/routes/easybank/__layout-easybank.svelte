<script>
	import Header from './_components/Header.svelte';
	import Footer from './_components/Footer.svelte';
</script>

<div class="wrapper">
	<Header />
	<slot />
	<Footer />
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;700&display=swap');

	.wrapper {
		--clr-bg__1: hsl(0, 0%, 98%);
		--clr-bg__2: hsl(220, 16%, 96%);

		--clr-prim__green: hsl(136, 65%, 51%);
		--clr-prim__cyan: hsl(192, 70%, 51%);
		--clr-gradient__green-blue: linear-gradient(
			135deg,
			var(--clr-prim__green) 50%,
			var(--clr-prim__cyan) 80%
		);
		--clr-gradient__dark-transparent: linear-gradient(
			0deg,
			transparent 0%,
			var(--ft-clr__head) 100%
		);
		--clr__wt: hsl(0, 0%, 100%);

		--ft-fam__main: 'Public Sans', sans-serif;

		--ft-wt__lt: 300;
		--ft-wt__norm: 400;
		--ft-wt__bold: 700;

		--ft-clr__head: hsl(233, 26%, 24%);
		--ft-clr__body: hsl(233, 8%, 62%);

		--ft-sz__base: clamp(0.94rem, 3.5vw, 1.125rem); /* 15px - 18px */

		--ft-sz__head-main: 2.7em; /* 40.5 - 45 */
		--ft-sz__head-sect: 2.13em; /* 31.95 - 38.34 */
		--ft-sz__head-card: 1.33em; /* 19.95 - 23.94 */

		--ft-sz__body: 1em;
		--ft-sz__smaller: 0.93em;

		--page__padding-l: clamp(1.6em, 8vw, 9em);
		--page__padding-r: var(--page__padding-l);

		--sect__padding-t: 4em;
		--sect__padding-b: var(--sect__padding-t);

		position: relative;
		display: contents;
		max-width: 100vw;
		font-family: var(--ft-fam__main);
		font-weight: var(--ft-wt__norm);
		font-size: var(--ft-sz__base);
		overflow-x: hidden;
	}

	.wrapper > :global(*:not(.mobile-nav-toggle):nth-child(even)) {
		background-color: var(--clr-bg__1);
	}

	.wrapper > :global(*:nth-child(odd)) {
		background-color: var(--clr-bg__2);
	}

	.wrapper :global(.text__head) {
		font-size: var(--ft-sz__head-sect);
		font-weight: var(--ft-wt__lt);
		color: var(--ft-clr__head);
	}

	.wrapper :global(.text__body) {
		font-size: var(--ft-sz__body);
		font-weight: var(--ft-wt__norm);
		color: var(--ft-clr__body);
		line-height: 1.6em;
	}

	.wrapper :global(.text__body.sub) {
		font-size: var(--ft-sz__smaller);
	}

	.wrapper :global(.btn__call-to-action) {
		width: max-content;
		border-radius: 100vh;
		font-size: var(--ft-sz__smaller);
		line-height: 1.87em;
	}

	.wrapper :global(.btn__call-to-action a) {
		border-radius: inherit;
		padding: 0.75em 2.26em;
		background: var(--clr-gradient__green-blue);
		font-weight: var(--ft-wt__bold);
		color: var(--clr__wt);
		transition: filter 0.25s;
	}

	.wrapper :global(.btn__call-to-action:hover a) {
		filter: brightness(1.2);
	}
</style>
