<script>
	import { fade, fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	import { details } from './details';
	import { onMount } from 'svelte';

	let contentHeight, headerHeight, timer;

	let curArticleInd = 0;
	$: curArticle = details[curArticleInd];

	const prevArticle = () => {
		curArticleInd ? curArticleInd-- : (curArticleInd = details.length - 1);
		resetTimer();
	};

	const nextArticle = () => {
		curArticleInd === details.length - 1 ? (curArticleInd = 0) : curArticleInd++;
		resetTimer();
	};

	const startTimer = () => (timer = setInterval(() => nextArticle(), 5000));
	const stopTimer = () => clearInterval(timer);
	const resetTimer = () => {
		stopTimer();
		startTimer();
	};

	onMount(() => {
		startTimer();
		return stopTimer;
	});
</script>

<main>
	<!-- {#key curArticleInd} -->
	<article>
		<div class="pic-wrapper">
			{#key curArticleInd}
				<picture out:fade={{ duration: 250 }} in:fade={{ duration: 400, delay: 300 }}>
					<source srcset={curArticle.image.mobile} media="(max-width: 700px)" />
					<source srcset={curArticle.image.desktop} />
					<img src={curArticle.image.mobile} alt="Hero" />
				</picture>
			{/key}
		</div>

		<figure>
			<figcaption style:height="{headerHeight}px">
				{#key curArticleInd}
					<h2
						bind:clientHeight={headerHeight}
						out:fade={{ duration: 250 }}
						in:fly={{ y: -200, duration: 300, delay: 300, easing: cubicOut }}
					>
						{curArticle.header}
					</h2>
				{/key}
			</figcaption>

			<section style:height="{contentHeight}px">
				{#key curArticleInd}
					<p
						bind:clientHeight={contentHeight}
						out:fade={{ duration: 250 }}
						in:fly={{ x: 400, duration: 400, delay: 400, easing: cubicOut }}
					>
						{curArticle.content}
					</p>
				{/key}
			</section>

			<a href="#">
				SHOP NOW
				<img src="/room/icon-arrow.svg" alt="Arrow" />
			</a>
		</figure>
	</article>
	<!-- {/key} -->

	<menu>
		<li>
			<button on:click={prevArticle}>
				<img src="/room/icon-angle-left.svg" alt="Back" />
			</button>
		</li>
		<li>
			<button on:click={nextArticle}>
				<img src="/room/icon-angle-right.svg" alt="Next" />
			</button>
		</li>
	</menu>
</main>

<style>
	main {
		--hero-img__height: 50vh;
		--hero-img__width: 100vw;

		position: relative;
	}

	article {
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.pic-wrapper {
		position: relative;
		width: var(--hero-img__width);
		height: var(--hero-img__height);
		background-color: var(--ft-clr__header);
	}

	picture {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	picture > * {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}

	figure {
		position: relative;
		height: 50vh;
		width: 100%;
		max-width: 60ch;
		margin: 0 auto;
		padding: 0 2em;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 1em;
	}

	figcaption,
	section {
		position: relative;
	}

	figure > * {
		width: 100%;
	}

	figcaption {
		font-size: 1.7em;
	}

	h2,
	p {
		position: absolute;
	}

	section {
		margin-bottom: 1.4em;
	}

	p {
		line-height: 1.5em;
		color: var(--ft-clr__body);
	}

	a {
		font-size: larger;
		font-weight: var(--ft-wt__med);
		letter-spacing: 0.5em;
		transition: color 0.15s;
	}

	a:hover,
	a:active {
		color: var(--ft-clr__header);
	}

	menu {
		position: absolute;
		right: 0;
		bottom: var(--hero-img__height);
		background-color: var(--clr__blk);
		display: flex;
	}

	menu button {
		padding: 1em 1.5em;
		transition: background-color 0.15s;
	}

	menu button:hover,
	menu button:active {
		background-color: var(--ft-clr__header);
	}

	menu img {
		height: 1em;
	}

	@media screen and (min-width: 1000px) {
		main {
			--hero-img__width: 60vw;
			--hero-img__height: 100%;
		}

		article {
			height: 60vh;
			flex-direction: row;
		}

		figure {
			flex-basis: 40vw;
			padding: 0 2em;
			align-content: center;
		}

		menu {
			right: unset;
			left: var(--hero-img__width);
			bottom: 0;
		}
	}
</style>
