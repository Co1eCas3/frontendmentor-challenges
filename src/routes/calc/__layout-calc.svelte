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
		--clr-els__neut: hsl(185, 42%, 37%);
		--clr-els__neut-shadow: hsl(185, 58%, 25%);
		--clr-els__accent: hsl(25, 98%, 40%);
		--clr-els__accent-shadow: hsl(25, 99%, 27%);

		--ft-clr__main: hsl(60, 10%, 19%);
		--ft-clr__alt: hsl(0, 0, 100%);
		--ft-clr__alt-sec: var(--ft-clr__alt);

		--ft-fam__main: 'League Spartan', sans-serif;
		--ft-wt__norm: 700;
		--ft-sz__norm: 32px;
	}

	.wrapper.dark {
		--clr-bg__main: hsl(222, 26%, 31%);
		--clr-bg__focal: hsl(223, 31%, 20%);
		--clr-bg__second: hsl(223, 36%, 15%);

		--clr-els__main: hsl(30, 25%, 89%);
		--clr-els__main-shadow: hsl(28, 16%, 65%);
		--clr-els__neut: hsl(225, 21%, 49%);
		--clr-els__neut-shadow: hsl(224, 28%, 35%);
		--clr-els__accent: hsl(6, 63%, 50%);
		--clr-els__accent-shadow: hsl(6, 70%, 34%);

		--ft-clr__main: hsl(221, 14%, 31%);
		--ft-clr__alt: hsl(0, 0, 100%);
		--ft-clr__alt-sec: var(--ft-clr__alt);
	}

	.wrapper.purp {
		--clr-bg__main: hsl(268, 75%, 9%);
		--clr-bg__focal: hsl(268, 71%, 12%);
		--clr-bg__second: var(--clr-bg__focal);

		--clr-els__main: hsl(268, 47%, 21%);
		--clr-els__main-shadow: hsl(290, 70%, 36%);
		--clr-els__neut: hsl(281, 89%, 26%);
		--clr-els__neut-shadow: hsl(285, 91%, 52%);
		--clr-els__accent: hsl(176, 100%, 44%);
		--clr-els__accent-shadow: hsl(177, 92%, 70%);

		--ft-clr__main: hsl(52, 100%, 62%);
		--ft-clr__alt: hsl(0, 0, 100%);
		--ft-clr__alt-sec: hsl(198, 20%, 13%);
	}

	.wrapper {
		width: 100vw;
		height: 100vh;
		background-color: var(--clr-bg__main);
		color: var(--ft-clr__main);
		font-family: var(--ft-fam__main);
		font-size: var(--ft-sz__norm);
	}
</style>
