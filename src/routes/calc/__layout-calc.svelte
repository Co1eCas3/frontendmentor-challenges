<script>
	import { theme } from './_stores/theme';
</script>

<svelte:head>
	<title>Calculator App</title>
</svelte:head>

<div class="wrapper {$theme}">
	<slot />
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@700&display=swap');

	.wrapper.light {
		--clr-bg__main: hsl(0, 0%, 90%);
		--clr-bg__focal: hsl(0, 5%, 81%);
		--clr-bg__second: hsl(0, 0%, 93%);

		--clr-els__main: hsl(45, 7%, 89%);
		--clr-els__main-shadow: hsl(35, 11%, 61%);
		--clr-els__main-bright: hsl(45, 7%, 99%);
		--clr-els__neut: hsl(185, 42%, 37%);
		--clr-els__neut-shadow: hsl(185, 58%, 25%);
		--clr-els__neut-bright: hsl(185, 42%, 47%);
		--clr-els__accent: hsl(25, 98%, 40%);
		--clr-els__accent-shadow: hsl(25, 99%, 27%);
		--clr-els__accent-bright: hsl(25, 98%, 50%);

		--ft-clr__main: hsl(60, 10%, 19%);
		--ft-clr__alt: hsl(0, 0%, 100%);
		--ft-clr__alt-sec: var(--ft-clr__alt);
		--ft-clr__header: var(--ft-clr__main);
	}

	.wrapper.dark {
		--clr-bg__main: hsl(222, 26%, 31%);
		--clr-bg__focal: hsl(223, 31%, 20%);
		--clr-bg__second: hsl(223, 36%, 15%);

		--clr-els__main: hsl(30, 25%, 89%);
		--clr-els__main-shadow: hsl(28, 16%, 65%);
		--clr-els__main-bright: hsl(30, 25%, 99%);
		--clr-els__neut: hsl(225, 21%, 49%);
		--clr-els__neut-shadow: hsl(224, 28%, 35%);
		--clr-els__neut-bright: hsl(225, 21%, 59%);
		--clr-els__accent: hsl(6, 63%, 50%);
		--clr-els__accent-shadow: hsl(6, 70%, 34%);
		--clr-els__accent-bright: hsl(6, 63%, 60%);

		--ft-clr__main: hsl(221, 14%, 31%);
		--ft-clr__alt: hsl(0, 0%, 100%);
		--ft-clr__alt-sec: var(--ft-clr__alt);
		--ft-clr__header: var(--ft-clr__alt);
	}

	.wrapper.purp {
		--clr-bg__main: hsl(268, 75%, 9%);
		--clr-bg__focal: hsl(268, 71%, 12%);
		--clr-bg__second: var(--clr-bg__focal);

		--clr-els__main: hsl(268, 47%, 21%);
		--clr-els__main-shadow: hsl(290, 70%, 36%);
		--clr-els__main-bright: hsl(268, 47%, 31%);
		--clr-els__neut: hsl(281, 89%, 26%);
		--clr-els__neut-shadow: hsl(285, 91%, 52%);
		--clr-els__neut-bright: hsl(281, 89%, 36%);
		--clr-els__accent: hsl(176, 100%, 44%);
		--clr-els__accent-shadow: hsl(177, 92%, 70%);
		--clr-els__accent-bright: hsl(176, 100%, 54%);

		--ft-clr__main: hsl(52, 100%, 62%);
		--ft-clr__alt: hsl(0, 0%, 100%);
		--ft-clr__alt-sec: hsl(198, 20%, 13%);
		--ft-clr__header: var(--ft-clr__main);
	}

	.wrapper {
		--ft-fam__main: 'League Spartan', sans-serif;
		--ft-wt__norm: 700;

		--ft-sz__base: clamp(16px, 4.3vw, 20px);

		--ft-sz__nano: 0.1em;
		--ft-sz__mini: 0.25em;
		--ft-sz__small: 0.5em;
		--ft-sz__smaller: 0.75em;
		--ft-sz__norm: 1.5em;
		--ft-sz__larger: 2em;
		--ft-sz__large: 2.5em;
		--ft-sz__huge: 5em;

		width: 100vw;
		min-height: 100vh;
		background-color: var(--clr-bg__main);
		color: var(--ft-clr__main);
		font-family: var(--ft-fam__main);
		font-size: var(--ft-sz__base);
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
