<script>
	import { input, operands, operators } from '../_stores';
	import { keyToInputMapping } from '../_helpers/keyToInputMapping';

	function handleActiveState(next) {
		return (e) => {
			next(e);
			e.target.blur();
		};
	}

	function handleDigit({ target }) {
		input.concat(target.value);
	}

	function handleOperator({ target }) {
		if ($input && !/\d/.test($input)) return;
		if (!$operands.length && !$input) return;

		if (!$input) {
			if ($operands.length !== $operators.length) return operators.concat(target.value);

			return operators.switchLast(target.value);
		}

		operands.concat($input);
		operators.concat(target.value);
		input.reset();
	}

	function handleEvaluate() {
		if ($operands.length < 1) return;

		if ($operands.length !== $operators.length) operators.concat();
		operands.concat($input);

		input.reset();
	}

	function handleDel() {
		input.del();
	}

	function handleReset() {
		[input, operands, operators].forEach((store) => store.reset());
	}

	/* BEGIN KEY HANDLING */

	let keyMapping;
	const getKeyMap = (mapping) => (keyMapping = mapping);

	function handleKeyup({ key }) {
		keyMapping[key].click();
		keyMapping[key].focus();
		setTimeout(() => {
			keyMapping[key].blur();
		}, 150);
	}
</script>

<svelte:window on:keyup={handleKeyup} />

<form use:keyToInputMapping={getKeyMap}>
	<fieldset class="digit" on:click={handleActiveState(handleDigit)}>
		<input type="button" value="1" style:grid-area="one" />
		<input type="button" value="2" style:grid-area="two" />
		<input type="button" value="3" style:grid-area="three" />
		<input type="button" value="4" style:grid-area="four" />
		<input type="button" value="5" style:grid-area="five" />
		<input type="button" value="6" style:grid-area="six" />
		<input type="button" value="7" style:grid-area="seven" />
		<input type="button" value="8" style:grid-area="eight" />
		<input type="button" value="9" style:grid-area="nine" />
		<input type="button" value="0" style:grid-area="zero" />
		<input type="button" value="." style:grid-area="dec" />
	</fieldset>

	<fieldset class="operator" on:click={handleActiveState(handleOperator)}>
		<input type="button" value="+" style:grid-area="plus" />
		<input type="button" value="-" style:grid-area="minus" />
		<input type="button" value="x" style:grid-area="multiply" />
		<input type="button" value="/" style:grid-area="divide" />
	</fieldset>

	<fieldset class="evaluate" on:click={handleActiveState(handleEvaluate)}>
		<input type="button" value="=" style:grid-area="equal" />
	</fieldset>

	<fieldset class="del" on:click={handleActiveState(handleDel)}>
		<input type="button" value="del" style:grid-area="del" />
	</fieldset>

	<fieldset class="reset" on:click={handleActiveState(handleReset)}>
		<input type="button" value="reset" style:grid-area="reset" />
	</fieldset>
</form>

<style>
	form {
		border-radius: 0.3em;
		padding: 0.5em;
		background-color: var(--clr-bg__focal);
		color: var(--ft-clr__main);
		font-size: var(--ft-sz__norm);
		display: grid;
		grid-template-areas:
			'seven eight nine del'
			'four five six plus'
			'one two three minus'
			'dec zero divide multiply'
			'reset reset equal equal';
		grid-template-columns: repeat(4, 1fr);
		gap: 0.5em;
	}

	fieldset {
		border: none;
		display: contents;
	}

	input {
		width: 100%;
		height: var(--ft-sz__larger);
		border-radius: 0.25em;
		border-bottom: 5px solid var(--clr-els__main-shadow);
		background-color: var(--clr-els__main);
		font-family: var(--ft-fam__main);
		font-weight: var(--ft-wt__norm);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	input:hover,
	input:focus {
		background-color: var(--clr-els__main-bright);
	}

	input:focus {
		border-bottom-width: 1px;
	}

	.evaluate input {
		border-bottom-color: var(--clr-els__accent-shadow);
		background-color: var(--clr-els__accent);
		color: var(--ft-clr__alt-sec);
	}

	.evaluate input:hover,
	.evaluate input:focus {
		background-color: var(--clr-els__accent-bright);
	}

	.del input,
	.reset input {
		border-bottom-color: var(--clr-els__neut-shadow);
		background-color: var(--clr-els__neut);
		color: var(--ft-clr__alt);
		text-transform: uppercase;
	}

	.del input:hover,
	.del input:focus,
	.reset input:hover,
	.reset input:focus {
		background-color: var(--clr-els__neut-bright);
	}

	.reset input,
	.evaluate input {
		aspect-ratio: 2.5;
	}
</style>
