<script>
	import AboutCard from './AboutCard.svelte';
	import { aboutCards } from './aboutCards';
</script>

<section>
	<article>
		<header>
			<h2 class="text__head">Why choose Easybank?</h2>
		</header>

		<p class="text__body">
			We leverage Open Banking to turn your back account into your financial hub. Control your
			finances like never before.
		</p>
	</article>

	<div class="wrapper__about-cards">
		{#each aboutCards as card}
			<AboutCard {...card} />
		{/each}
	</div>
</section>

<style>
	section {
		width: 100%;
		padding-top: var(--sect__padding-t);
		padding-bottom: var(--sect__padding-b);
		padding-left: var(--page__padding-l);
		padding-right: var(--page__padding-r);
		text-align: center;
		display: flex;
		flex-direction: column;
		gap: 4em;
	}

	header {
		margin-bottom: 1em;
	}

	.wrapper__about-cards {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1.6em;
	}

	@media screen and (min-width: 50em) {
		section {
			text-align: left;
		}

		.wrapper__about-cards {
			justify-content: space-between;
		}
	}
</style>
