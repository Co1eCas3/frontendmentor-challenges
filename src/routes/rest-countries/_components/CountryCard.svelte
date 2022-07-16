<script>
	export let country;
</script>

<a href="/rest-countries/{country.name.common.toLowerCase().replace(/\s/g, '-')}">
	<figure>
		<figcaption>{country.name.official}</figcaption>
		<img src={country.flags.svg} alt="{country.name.official} Flag" />
		<dl>
			<dt>Population:</dt>
			<dd>{country.population.toLocaleString()}</dd>
			<dt>Region:</dt>
			<dd>{country.region}</dd>
			{#if country.capital}
				<dt>Capital:</dt>
				<dd>{country.capital.join(', ')}</dd>
			{/if}
		</dl>
	</figure>
</a>

<style>
	a {
		display: contents;
	}

	figure {
		height: 100%;
		border-radius: var(--radius__dulled);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		overflow: hidden;
		gap: 1.2em;
	}

	figcaption,
	dl {
		padding: 0 10%;
	}

	figcaption,
	dt {
		font-weight: var(--ft-wt__med);
	}

	figcaption {
		order: 2;
		font-size: larger;
	}

	img {
		order: 1;
		/* width: 100%; */
		height: 12em;
		box-shadow: var(--shadow__lt);
	}

	dl {
		order: 3;
		margin-bottom: 2em;
		display: flex;
		flex-wrap: wrap;
	}

	dt {
		flex-basis: min-content;
		margin-right: 1ch;
		margin-bottom: 0.5em;
	}

	dd {
		flex-basis: 60%;
		flex-grow: 2;
		flex-shrink: 0;
	}
</style>
