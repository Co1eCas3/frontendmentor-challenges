<script>
	import { siteMap } from './_siteMap';
</script>

<header>
	<h1>ColeCase</h1>
	<h2>FrontendMentor.io Challenges</h2>
</header>

<nav>
	{#each siteMap as page}
		<a href={page.href}>
			<figure>
				<figcaption>
					<h3>{page.name}</h3>
				</figcaption>
				<img src="{page.href}/example.jpg" alt={page.name} />

				<dl>
					<dt>Started:</dt>
					<dd>{page.started}</dd>
					<dt>Completed:</dt>
					<dd>{page.completed}</dd>
				</dl>

				<a href={page.challengeURL} target="_blank" on:click|stopPropagation>View Challenge</a>
			</figure>
		</a>
	{/each}
</nav>

<style>
	header {
		padding: 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	nav {
		width: min(100%, 70rem);
		margin: 1rem;
		border-radius: 0.75rem;
		padding: 3rem 1rem;
		background-color: rgb(8, 3, 12);
		color: #cfcfcf;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		gap: 3rem;
	}

	figure {
		flex-basis: calc(100% / 3);
		height: 35vh;
		border: 1px solid rgba(220, 220, 220, 0.5);
		border-radius: 0.75rem;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.75rem;
		justify-content: space-between;
	}

	img {
		max-height: calc(25vh * 0.7);
	}

	dl {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}

	dd,
	dt {
		flex-basis: 50%;
		text-align: center;
	}
</style>
