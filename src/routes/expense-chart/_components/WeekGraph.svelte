<script>
  import { numToDollar, getDayName } from "$lib/utils";
  export let transactions;

  const [days, amounts] = transactions.reduce(
    (res, trans) => {
      res[0].push(new Date(trans.date).getDay());
      res[1].push(trans.amount);
      return res;
    },
    [[], []]
  );

  const max = Math.max(...amounts);

  let trHeight, dataHeight;
  $: maxHeight = trHeight - dataHeight;

  let actives = amounts.map((_) => false);
  const activate = (i) => (actives[i] = true);
  const deactivate = (i, delay = true) =>
    setTimeout(() => (actives[i] = false), delay ? 2000 : 0);
</script>

<table>
  <thead>
    <tr>
      {#each days as day}
        <th>{getDayName(day)}</th>
      {/each}
    </tr>
  </thead>
  <tbody>
    <tr bind:clientHeight={trHeight}>
      {#each amounts as amount, i}
        {@const height = (((amount / max) * maxHeight) / maxHeight) * 100}
        <td
          class:active={actives[i]}
          on:touchstart={() => activate(i)}
          on:touchend={() => deactivate(i)}
          on:mouseenter={() => activate(i)}
          on:mouseleave={() => deactivate(i, false)}
        >
          <data value="${numToDollar(amount)}" bind:clientHeight={dataHeight} />
          <div
            style:background-color="var(--clr__prim-{amount === max
              ? "cyan"
              : "red"})"
            style:flex-basis="{height}%"
            class:notYet={!maxHeight}
          />
        </td>
      {/each}
    </tr>
  </tbody>
</table>

<style>
  table {
    width: 100%;
    height: 15rem;
    margin-bottom: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 0.35em;
  }

  thead {
    order: 2;
    flex-basis: 1.5em;
  }

  tbody {
    order: 1;
    flex-basis: calc(100% - 1.5em);
  }

  tr {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
  }

  td,
  th {
    width: 8ch;
    text-align: center;
  }

  th {
    font-size: 0.68em;
    font-weight: var(--ft-wt__norm);
    color: var(--clr__neut-med-brown);
  }

  td {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 0.25em;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  data,
  data::after,
  div {
    border-radius: 0.25em;
  }

  data {
    /* display: none; */
    position: relative;
    box-sizing: content-box;
    /* width: 100%; */
    height: 1em;
    padding: 0.4em;
    font-size: var(--ft-sz__def);
    color: var(--clr__neut-pale-orange);
    opacity: 0;
    transition: opacity 0.25s ease-in;
  }

  data::after {
    content: attr(value);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding: 0.4em;
    background-color: var(--clr__neut-dk-brown);
    font-size: var(--ft-sz__def);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  td.active > data {
    opacity: 1;
  }

  td.active > div {
    filter: brightness(1.08);
  }

  div {
    width: 75%;
    flex-basis: 100%;
    margin-inline: auto;
    background-color: var(--clr__prim-red);
    transition: flex-basis 0.25s ease-out;
  }

  .notYet {
    flex-basis: 0 !important;
  }
</style>
