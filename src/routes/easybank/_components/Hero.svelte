<main>
	<article>
		<header>
			<h1 class="text__head">Next generation digital banking</h1>
		</header>

		<p class="text__body">
			Take your financial life online. Your Easyback account will be a one-stop-shop for spending,
			saving, budgeting, investing and much more.
		</p>

		<button class="btn__call-to-action">
			<a href="#">Request Invite</a>
		</button>
	</article>

	<div class="img__hero-wrapper">
		<picture>
			<source srcset="/easybank/bg-intro-mobile.svg" media="(max-width: 50em)" />
			<source srcset="/easybank/bg-intro-desktop.svg" />
			<img src="/easybank/bg-intro-desktop.svg" alt="Intro background" />
		</picture>

		<img src="/easybank/image-mockups.png" alt="Easybank app mockups" />
	</div>
</main>

<style>
	main {
		width: 100vw;
		max-width: 100vw;
		padding-bottom: 5em;
		display: flex;
		flex-direction: column;
	}

	article {
		order: 2;
		max-width: 43ch;
		margin: 1em auto;
		padding: 0 1em;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1em;
	}

	h1 {
		font-size: var(--ft-sz__head-main) !important;
	}

	.btn__call-to-action {
		margin-top: 1em;
	}

	.img__hero-wrapper {
		position: relative;
		z-index: 1;
		order: 1;
		width: 100vw;
		height: 50vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	picture {
		width: 100%;
	}

	picture > * {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}

	.img__hero-wrapper > img {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		max-width: 30em;
		margin: auto;
		object-fit: cover;
		object-position: bottom;
	}

	@media screen and (min-width: 50em) {
		main {
			height: 50vw;
			max-height: 780px;
			margin: 0;
			padding: 0;
			flex-direction: row;
			gap: none;
		}

		article {
			order: 1;
			width: 50vw;
			text-align: left;
			justify-content: center;
			align-items: flex-start;
		}

		.img__hero-wrapper {
			order: 2;
			width: 50vw;
			height: 100%;
		}

		picture > * {
			width: 150%;
			object-fit: cover;
			object-position: bottom;
		}

		.img__hero-wrapper > img {
			top: 0;
			left: 20%;
			max-width: unset;
			object-position: left;
		}
	}
</style>
