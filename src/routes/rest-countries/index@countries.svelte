<script>
	import { navigating, page } from '$app/stores';

	import { COUNTRIESURL } from './_countriesURL';

	import CountryFilters from './_components/CountryFilters.svelte';
	import CountryCard from './_components/CountryCard.svelte';
	import Loader from '$lib/components/Loader.svelte';

	async function getCountries({ searchParams }) {
		const term = searchParams.get('name');
		const region = searchParams.get('region');
		let res;

		if (term) {
			res = await fetch(`${COUNTRIESURL}/name/${term}`);

			if (region) {
				const countries = await res.json();
				return countries.filter(({ region: _region }) => region === _region);
			}
		} else if (region) {
			res = await fetch(`${COUNTRIESURL}/region/${region}`);
		} else {
			res = await fetch(`${COUNTRIESURL}/all`);
		}

		return await res.json();
	}
</script>

<CountryFilters />

{#await getCountries($navigating?.to ?? $page.url)}
	<Loader />
{:then countries}
	{#if !countries.length}
		<i>No matches</i>
	{:else}
		<ul>
			{#each countries as country}
				<li>
					<CountryCard {country} />
				</li>
			{/each}
		</ul>
	{/if}
{:catch error}
	<pre>{error.toString()}</pre>
{/await}

<style>
	i {
		display: block;
		width: 100%;
		text-align: center;
		opacity: 0.5;
	}

	ul {
		width: 100%;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 2rem;
	}

	li {
		width: min(80vw, 40ch);
		border-radius: var(--radius__dulled);
		/* flex-grow: 1; */
		box-shadow: var(--shadow__deep);
		background-color: var(--clr__els);
	}
</style>
