<script>
	import { numToDollar } from '$lib/utils';
	import WeekGraph from './_components/WeekGraph.svelte';
	import MonthStats from './_components/MonthStats.svelte';

	export let account, transactions;

	let { currentBalance } = account;
	transactions = transactions.sort(({ date: a }, { date: b }) => a - b);
</script>

<article>
	<header>
		<dl>
			<dt>My balance</dt>
			<dd>
				<data>${numToDollar(currentBalance)}</data>
			</dd>
		</dl>
		<img src="expense-chart/logo.svg" alt="Logo" />
	</header>

	<figure>
		<figcaption>Spending - Last 7 days</figcaption>

		<WeekGraph transactions={transactions.slice(-7)} />

		<MonthStats {transactions} />
	</figure>
</article>

<style>
	article {
		width: min(95%, 25rem);
		justify-self: center;
		font-family: var(--ft-fam__main);
		font-size: var(--ft-sz__main);
		font-weight: var(--ft-wt__norm);
		color: var(--clr__neut-dk-brown);
	}

	header {
		margin-bottom: var(--ft-sz__def);
		padding: var(--ft-sz__main);
		border-radius: var(--ft-sz__def);
		background-color: var(--clr__prim-red);
		color: var(--clr__neut-pale-orange);
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	dt {
		margin-bottom: 0.75rem;
		font-size: var(--ft-sz__def);
	}

	dd {
		font-size: var(--ft-sz__desc);
		font-weight: var(--ft-wt__bold);
	}

	img {
		height: 2rem;
	}

	figure {
		padding: 1.5rem;
		border-radius: var(--ft-sz__def);
		background-color: #fff;
	}

	figcaption {
		margin-bottom: var(--ft-sz__def);
		font-size: var(--ft-sz__desc);
		font-weight: var(--ft-wt__bold);
	}
</style>
