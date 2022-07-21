export function keyToInputMapping(el, setVarFn) {
  const mapping = {
    '0': el.querySelector('[value="0"]'),
    '1': el.querySelector('[value="1"]'),
    '2': el.querySelector('[value="2"]'),
    '3': el.querySelector('[value="3"]'),
    '4': el.querySelector('[value="4"]'),
    '5': el.querySelector('[value="5"]'),
    '6': el.querySelector('[value="6"]'),
    '7': el.querySelector('[value="7"]'),
    '8': el.querySelector('[value="8"]'),
    '9': el.querySelector('[value="9"]'),
    '.': el.querySelector('[value="."]'),
    '+': el.querySelector('[value="+"]'),
    '-': el.querySelector('[value="-"]'),
    '/': el.querySelector('[value="/"]'),
    '*': el.querySelector('[value="x"]'),
    'x': el.querySelector('[value="x"]'),
    'Delete': el.querySelector('[value="reset"]'),
    'Backspace': el.querySelector('[value="del"]'),
    '=': el.querySelector('[value="="]'),
    'Enter': el.querySelector('[value="="]'),
  }

  setVarFn(mapping);
}