import { derived } from "svelte/store";
import { operands } from './operands';
import { operators } from './operators';

export const output = derived(
  [operands, operators],
  ([$operands, $operators]) => {
    if ($operands.length < 2) return '';

    $operators = $operators.slice(0, $operands.length - 1);

    let res;

    for (let i = 0; i < $operands.length; i++) {
      let operand = $operands[i].replace(/,/g, '');

      if (!i) {
        res = operand;
        continue;
      }

      let operator = $operators[i - 1] === 'x' ? '*' : $operators[i - 1];

      res = eval(`${res}${operator}${operand}`);
    };

    return res.toLocaleString();
  }
)

