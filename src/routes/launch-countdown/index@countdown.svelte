<script>
	import Countdown from './_components/Countdown.svelte';
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
			<li><img src="/launch-countdown/icon-facebook.svg" alt="Facebook" /></li>
			<li><img src="/launch-countdown/icon-pinterest.svg" alt="Pinsterest" /></li>
			<li><img src="/launch-countdown/icon-instagram.svg" alt="Instagram" /></li>
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
</style>
