<script context="module">
	import { browser } from '$app/env';

	export async function load() {
		if (!browser) return {};

		let darkModeSaved = localStorage.getItem('countries-color-setting');
		console.log('load: ', darkModeSaved);
		if (darkModeSaved != null) darkModeSaved = darkModeSaved === 'true';

		let prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

		return {
			props: {
				darkModeEnabled: darkModeSaved ?? prefersDarkTheme
			}
		};
	}
</script>

<script>
	export let darkModeEnabled;
	$: console.log(darkModeEnabled);

	function toggleNSaveDarkMode() {
		console.log('theme toggled');
		darkModeEnabled = !darkModeEnabled;
		localStorage.setItem('countries-color-setting', darkModeEnabled);
	}
</script>

<main class:dark-theme={darkModeEnabled}>
	<header>
		<a href="/rest-countries">
			<h1>Where in the world?</h1>
		</a>
		<button on:click={toggleNSaveDarkMode}>
			<i class="icon-moon" />
			{darkModeEnabled ? 'Light' : 'Dark'} Mode
		</button>
	</header>

	<div class="wrapper">
		<slot />
	</div>
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');

	main {
		--clr__bg: hsl(0, 0%, 95%);
		--clr__txt: hsl(200, 15%, 8%);
		--clr__inp: hsl(0, 0%, 52%);
		--clr__els: hsl(0, 0%, 100%);

		--shadow__deep: 1px 1px 4px 2px rgba(8, 3, 12, 0.2);
		--shadow__lt: 0 2px 2px -2px rgba(8, 3, 12, 0.5);

		--ft-fam__main: 'Nunito Sans', sans-serif;
		--ft-wt__lt: 300;
		--ft-wt__med: 600;
		--ft-wt__bold: 800;

		--radius__dulled: 0.25em;
		--radius__pronounced: 0.7em;

		width: 100vw;
		min-height: 100vh;
		padding-bottom: 5em;
		background-color: var(--clr__bg);
		color: var(--clr__txt);
		font-size: 14px;
	}

	.dark-theme {
		--clr__bg: hsl(207, 26%, 17%);
		--clr__txt: hsl(0, 0%, 100%);
		--clr__inp: hsl(0, 0%, 52%);
		--clr__els: hsl(209, 23%, 22%);
	}

	header,
	.wrapper {
		width: 100%;
		padding: 0 clamp(1em, 5vw, 10em);
	}

	header {
		width: 100%;
		height: 5em;
		padding: 0 clamp(1em, 5vw, 10em);
		background-color: var(--clr__els);
		box-shadow: var(--shadow__deep);
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	h1 {
		font-size: clamp(1em, 2vw, 2em);
	}

	button {
		font-size: clamp(0.8em, 1vw, 1em);
		font-weight: var(--ft-wt__med);
		display: flex;
		align-items: center;
		gap: 0.5em;
	}

	.icon-moon {
		display: inline-block;
		position: relative;
		width: 1em;
		aspect-ratio: 1;
		border-radius: 50%;
		border-style: solid;
		border-width: 1px;
		border-color: var(--clr__txt) transparent var(--clr__txt) var(--clr__txt);
		background-color: var(--clr__txt);
		transform: rotate(-45deg);
		overflow: hidden;
	}

	.icon-moon::after {
		top: 10%;
		left: 40%;
		width: 90%;
		aspect-ratio: 1;
		border-radius: 50%;
		background-color: var(--clr__bg);
	}
</style>
