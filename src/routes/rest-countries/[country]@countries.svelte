<script>
	import { page } from '$app/stores';

	import { COUNTRIESURL } from './_countriesURL';

	import Loader from '$lib/components/Loader.svelte';

	async function getCountry({ country }) {
		const res = await fetch(`${COUNTRIESURL}/name/${country.replace(/-/g, '%20')}`);
		const [data] = await res.json();

		return data;
	}

	async function getBorderCountryNames(borderingCountryCodes) {
		if (!borderingCountryCodes || !borderingCountryCodes.length) return [];

		const res = await Promise.all(
			borderingCountryCodes.map((code) => fetch(`${COUNTRIESURL}/alpha/${code}`))
		);

		const data = await Promise.all(res.map((r) => r.json()));

		return data.map(([{ name }]) => name);
	}
</script>

<nav>
	<button type="button" on:click={() => window.history.back()}>&larr; Back</button>
</nav>

{#await getCountry($page.params)}
	<Loader />
{:then country}
	<article>
		<picture>
			<source srcset={country.flags.svg} />
			<source srcset={country.flags.png} />
			<img src={country.flags.svg} alt="{country.name.official} flag" />
		</picture>

		<section>
			<header>
				<h2>{country.name.official}</h2>
			</header>

			<dl class="info__geography">
				<div class="dt-wrap">
					<dt>Native Name</dt>
					{#each Object.values(country.name.nativeName) as { official }}
						<dd>{official}</dd>
					{/each}
				</div>

				<div class="dt-wrap">
					<dt>Population</dt>
					<dd>{country.population.toLocaleString()}</dd>
				</div>

				<div class="dt-wrap">
					<dt>Region</dt>
					<dd>{country.region}</dd>
				</div>

				<div class="dt-wrap">
					<dt>Sub Region</dt>
					<dd>{country.subregion}</dd>
				</div>

				<div class="dt-wrap">
					<dt>Capital</dt>
					{#each country.capital as capital}
						<dd>{capital}</dd>
					{/each}
				</div>
			</dl>

			<dl class="info__culture">
				<div class="dt-wrap">
					<dt>Top Level Domain</dt>
					{#each country.tld as tld}
						<dd>{tld}</dd>
					{/each}
				</div>

				<div class="dt-wrap">
					<dt>Currencies</dt>
					{#each Object.values(country.currencies) as { name }}
						<dd>{name}</dd>
					{/each}
				</div>

				<div class="dt-wrap">
					<dt>Languages</dt>
					{#each Object.values(country.languages) as lang}
						<dd>{lang}</dd>
					{/each}
				</div>
			</dl>

			<dl class="info__extra">
				<dt>Border Countries</dt>
				{#await getBorderCountryNames(country.borders)}
					<Loader />
				{:then borderingCountries}
					{#if !borderingCountries.length}
						<i>None</i>
					{:else}
						{#each borderingCountries as { official, common }}
							<dd>
								<a href="/rest-countries/{common.toLowerCase().replace(/\s/g, '-')}">
									{official}
								</a>
							</dd>
						{/each}
					{/if}
				{/await}
			</dl>
		</section>
	</article>
{:catch error}
	<pre>{error.toString()}</pre>
{/await}

<style>
	nav {
		width: 100%;
		padding: 3em 1em;
	}

	nav > button {
		padding: 0.5em 2em;
		background-color: var(--clr__els);
		box-shadow: var(--shadow__deep);
		transition: transform 0.15s;
	}

	article {
		width: 100%;
		padding: 1em;
		display: flex;
		flex-direction: column;
	}

	picture {
		flex-basis: 50%;
		flex-grow: 1;
		box-shadow: var(--shadow__lt);
		display: flex;
		justify-content: center;
	}

	picture > * {
		max-width: 100%;
		max-height: 40vh;
	}

	section {
		flex-basis: 50%;
		flex-grow: 1;
	}

	header {
		margin: 2em 0;
	}

	dl {
		margin-bottom: 2em;
	}

	.dt-wrap {
		margin-bottom: 1em;
		display: flex;
		flex-wrap: wrap;
		gap: 1ch;
	}

	dt {
		font-weight: var(--ft-wt__med);
	}

	dt::after {
		position: relative;
		content: ': ';
	}

	dl:not(.info__extra) dd:not(:last-child)::after {
		position: relative;
		content: ', ';
	}

	.info__extra {
		display: flex;
		flex-wrap: wrap;
		gap: 1ch;
	}

	.info__extra dt {
		flex-basis: 100%;
		margin-bottom: 1em;
	}

	.info__extra dd {
		padding: 0.5em 1.5em;
		background-color: var(--clr__els);
		box-shadow: var(--shadow__deep);
		font-size: smaller;
		cursor: pointer;
		transition: transform 0.15s;
	}

	nav > button:hover,
	.info__extra dd:hover {
		transform: scale(1.05);
	}

	@media screen and (min-width: 700px) {
		article {
			flex-direction: row;
			align-items: center;
			gap: 8em;
		}

		picture {
			flex-grow: 0;
		}

		section {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
		}

		header {
			flex-basis: 100%;
		}

		dl:not(.info__extra) {
			flex-basis: 50%;
			/* max-width: 50%; */
			flex-grow: 0;
			width: fit-content;
		}
	}
</style>
