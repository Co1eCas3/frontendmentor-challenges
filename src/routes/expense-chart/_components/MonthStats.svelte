<script>
  import { getDateInfo, numToDollar } from "$lib/utils";
  export let transactions;

  let [_, M, D] = getDateInfo(
    new Date(transactions[transactions.length - 1].date)
  );

  const lastMonth = M - 1;
  const [lastMonthTotal, curMonthTotal] = transactions.reduce(
    (res, trans) => {
      let [_, m, d] = getDateInfo(new Date(trans.date));

      if (d <= D) {
        let which;
        // for Dec/Jan case
        if (!M) which = m ? 0 : 1;
        else which = m - lastMonth;

        res[which] += trans.amount;
      }
      return res;
    },
    [0, 0]
  );

  const [lastMonthAvg, curMonthAvg] = [lastMonthTotal, curMonthTotal].map(
    (amt) => amt / D
  );

  const hasSpentMore = curMonthAvg > lastMonthAvg;
  let percentDiff = hasSpentMore
    ? curMonthAvg / lastMonthAvg
    : lastMonthAvg / curMonthAvg;

  percentDiff = ((percentDiff - 1) * 100).toFixed(1);
</script>

<section>
  <dl>
    <dt>Total this month</dt>
    <dd>
      <data>${numToDollar(curMonthTotal)}</data>
    </dd>
  </dl>

  <dl>
    <dt>from last month</dt>
    <dd>
      <data>{hasSpentMore ? "+" : "-"}{percentDiff}%</data>
    </dd>
  </dl>
</section>

<style>
  section {
    width: 100%;
    padding: 0 var(--ft-sz__def);
    display: flex;
    justify-content: space-between;
  }

  dl {
    display: flex;
    flex-direction: column;
    gap: 0.55em;
  }

  dt,
  dd {
    font-size: var(--ft-sz__def);
  }

  dt {
    color: var(--clr__neut-med-brown);
  }

  dd {
    font-weight: var(--ft-wt__bold);
  }

  dl:first-of-type dd {
    font-size: var(--ft-sz__emph);
  }

  dl:last-of-type {
    order: 2;
    gap: 0.2em;
    align-self: flex-end;
    justify-items: flex-end;
  }

  dl:last-of-type dt,
  dl:last-of-type dd {
    text-align: right;
  }

  dl:last-of-type dt {
    order: 2;
  }

  dl:last-of-type dd {
    order: 1;
  }
</style>
