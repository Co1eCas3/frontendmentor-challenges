<script>
	import Countdown from './_components/Countdown.svelte';
	import Facebook from './_components/icons/Facebook.svelte';
	import Pinterest from './_components/icons/Pinterest.svelte';
	import Instagram from './_components/icons/Instagram.svelte';
</script>

<article>
	<header>
		<h1>WE'RE LAUNCHING SOON</h1>
	</header>

	<Countdown />
</article>

<footer>
	<nav>
		<menu>
			<li><Facebook /></li>
			<li><Pinterest /></li>
			<li><Instagram /></li>
		</menu>
	</nav>
</footer>

<style>
	article {
		position: relative;
		z-index: 10;
		flex-basis: 85vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 5em;
	}

	footer {
		position: relative;
		z-index: 10;
		flex-basis: 15vh;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	menu {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2.5em;
	}

	li :global(svg) {
		transition: fill 0.2s;
	}

	li:hover :global(svg) {
		fill: var(--clr-prim__red);
	}
</style>
