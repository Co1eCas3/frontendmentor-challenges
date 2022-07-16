<svelte:head>
	<title>Rock-Paper-Scissors</title>
</svelte:head>

<main>
	<slot />
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@600;700&display=swap');

	main {
		--ft-fam__main: 'Barlow Semi Condensed', sans-serif;
		--ft-wt__semi-bold: 600;
		--ft-wt__bold: 700;
		--ft-clr__dk: hsl(229, 25%, 31%);
		--ft-clr__lt: hsl(229, 64%, 46%);

		--outline: hsl(217, 16%, 45%);

		--grad__bg: radial-gradient(circle, hsl(214, 47%, 23%) 0%, hsl(237, 49%, 15%) 100%);
		--grad__rock: linear-gradient(0deg, hsl(349, 71%, 52%) 0%, hsl(349, 70%, 56%) 100%);
		--grad__paper: linear-gradient(0deg, hsl(230, 89%, 62%) 0%, hsl(230, 89%, 65%) 100%);
		--grad__scissors: linear-gradient(0deg, hsl(39, 89%, 49%) 0%, hsl(40, 84%, 53%) 100%);

		position: relative;
		width: 100vw;
		height: 100vh;
		background: var(--grad__bg);
		background-position: -50%;
		font-weight: var(--ft-wt__semi-bold);
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}

	main,
	main * {
		font-family: var(--ft-fam__main);
	}
</style>
