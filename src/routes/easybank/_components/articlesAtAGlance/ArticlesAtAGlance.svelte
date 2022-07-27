<script>
	import ArticleCard from './ArticleCard.svelte';
	import { articleCards } from './articleCards';
</script>

<section>
	<header>
		<h2 class="text__head">Latest Articles</h2>
	</header>

	<ul class="wrapper__article-cards">
		{#each articleCards as article}
			<li>
				<ArticleCard {...article} />
			</li>
		{/each}
	</ul>
</section>

<style>
	section {
		width: 100%;
		padding-top: var(--sect__padding-t);
		padding-bottom: var(--sect__padding-b);
		padding-left: var(--page__padding-l);
		padding-right: var(--page__padding-r);
	}

	header {
		margin-bottom: 2em;
		text-align: center;
	}

	.wrapper__article-cards {
		width: 100%;
		font-size: 0.81rem;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 2em;
	}

	li {
		flex-basis: 100%;
	}

	@media screen and (min-width: 50em) {
		.wrapper__article-cards {
			justify-content: space-between;
		}

		li {
			flex-basis: 48%;
		}
	}

	@media screen and (min-width: 1415px) {
		li {
			flex-basis: auto;
		}
	}
</style>
