<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	import { debounce } from '$lib/utils';

	let term, region, form;
	$: {
		const { url } = $page;
		term = url.searchParams.get('name');
		region = url.searchParams.get('region');
	}

	// async function setName({ target }) {
	// 	const { url } = $page;

	// 	url.searchParams.delete('name');
	// 	url.searchParams.append('name', target.value);

	// 	await goto(url);
	// }

	// async function setRegion({ target }) {
	// 	const { url } = $page;
	// 	url.searchParams.delete('region');
	// 	url.searchParams.append('region', target.value);

	// 	await goto(url);
	// }

	async function appendQuery({ target }) {
		const { url } = $page;
		url.searchParams.delete(target.name);
		url.searchParams.append(target.name, target.value);

		await goto(url);
	}
</script>

<form action="/rest-countries" method="get" bind:this={form}>
	<div>
		<i class="icon-search" />
		<input
			type="search"
			name="name"
			placeholder="Search for a country..."
			value={term ?? ''}
			on:input={debounce(appendQuery, 500)}
		/>
	</div>

	<select name="region" on:input={appendQuery} value={region ?? ''}>
		<option value="">Filter by Region</option>
		<option>Africa</option>
		<option>Americas</option>
		<option>Asia</option>
		<option>Europe</option>
		<option>Oceania</option>
	</select>
</form>

<style>
	form {
		width: 100%;
		padding: 1.5em 0;
		/* padding: 1.5em 1em; */
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		gap: 2em;
	}

	div,
	select {
		background-color: var(--clr__els);
		box-shadow: var(--shadow__lt);
	}

	div {
		position: relative;
		width: min(24em, 100%);
		border-radius: var(--radius__dulled);
		padding: 1em;
		display: flex;
		align-items: center;
	}

	input {
		width: 100%;
		height: 100%;
		padding-left: 5em;
		font-size: smaller;
	}

	.icon-search {
		position: absolute;
		width: 1.5em;
		aspect-ratio: 1.08;
		margin-left: 1em;
	}

	.icon-search::before {
		width: 60%;
		aspect-ratio: 1;
		border-radius: 50%;
		border: 2px solid var(--clr__txt);
	}

	.icon-search::after {
		bottom: 0;
		right: 15%;
		width: 50%;
		height: 0;
		border-top: 2px solid var(--clr__txt);
		transform: rotate(45deg);
		transform-origin: bottom right;
	}

	div,
	select {
		background-color: var(--clr__els);
	}

	select {
		min-width: 30ch;
		border-radius: var(--radius__dulled);
		border: none;
		padding: 1em;
		font-size: smaller;
		color: inherit;
	}

	select:focus,
	select:focus-within,
	select:active {
		outline: none;
		border: none;
	}

	option {
		color: inherit;
	}
</style>
