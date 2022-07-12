<main>
	<img class="stars" src="/launch-countdown/bg-stars.svg" alt="Stars" />
	<img class="hills" src="/launch-countdown/pattern-hills.svg" alt="Hills" />
	<slot />
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Text:wght@700&display=swap');

	main {
		--ft-fam__main: 'Red Hat Text', sans-serif;

		--clr-prim__gray-blue: hsl(237, 18%, 59%);
		--clr-prim__red: hsl(345, 95%, 68%);

		--clr-neut__wt: hsl(0, 0%, 100%);
		--clr-neut__blue-lt: hsl(236, 21%, 26%);
		--clr-neut__blue: hsl(235, 16%, 14%);
		--clr-neut__blue-dk: hsl(234, 17%, 12%);

		position: relative;
		z-index: 1;
		width: 100%;
		height: 100vh;
		background-color: var(--clr-neut__blue-dk);
		color: var(--clr-neut__wt);
		font-family: var(--ft-fam__main);
		font-weight: 700;
		font-size: clamp(14px, 4vw, 32px);
		letter-spacing: 0.3em;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.stars {
		position: absolute;
		z-index: 1;
		top: 0;
		left: 0;
		right: 0;
		height: 100%;
	}

	.hills {
		position: absolute;
		bottom: 0;
		right: 0;
		z-index: 2;
		margin-inline: auto;
		height: 25vh;
	}
</style>
