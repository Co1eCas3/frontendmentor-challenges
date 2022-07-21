<script>
	import { input, output, operands, operators } from '../_stores/';

	let operandsNOperators = [];
	let maxHeight, fieldset;

	$: {
		const temp = [];
		for (let i = 0; i < $operands.length; i++) {
			const operand = $operands[i].toLocaleString();

			let operator = '';
			if ($operators[i]) operator = $operators[i];

			temp.push(operand + operator);
		}

		operandsNOperators = temp;
	}

	let doScroll;
	$: $operands, (doScroll = fieldset?.scrollHeight > maxHeight);

	const scrollToMe = (el) => el.scrollIntoView();
</script>

<form bind:clientHeight={maxHeight}>
	<fieldset class:doScroll bind:this={fieldset}>
		{#each operandsNOperators as op}
			<data use:scrollToMe>{@html op}</data>
			<br />
		{/each}
	</fieldset>

	<output>
		{$input || $output || $operands[0] || 0}
	</output>
</form>

<style>
	form {
		position: relative;
		width: 100%;
		height: var(--ft-sz__huge);
		border-radius: 0.3em;
		padding: 0 1em;
		background-color: var(--clr-bg__second);
		display: flex;
		justify-content: space-between;
	}

	fieldset {
		position: relative;
		z-index: 1;
		width: min-content;
		flex-basis: 30%;
		flex-grow: 1;
		border: none;
		padding: 0.2em 0;
		box-shadow: 8px 0 9px -3px var(--clr-bg__second);
		font-size: var(--ft-sz__smaller);
		overflow: scroll;
	}

	fieldset::-webkit-scrollbar {
		width: 0.5em;
		height: 90%;
		margin: 0.2em 0;
		border-radius: 100vh;
		background-color: var(--clr-bg__focal);
		display: none;
	}

	.doScroll::-webkit-scrollbar {
		display: unset;
	}

	fieldset::-webkit-scrollbar-thumb {
		width: 0.2em;
		border-radius: 100vh;
		background-color: var(--clr-els__accent);
	}

	output {
		width: 15ch;
		flex-basis: 15ch;
		height: 100%;
		text-align: right;
		font-size: var(--ft-sz__large);
		color: var(--ft-clr__header);
		display: flex;
		justify-content: flex-end;
		align-items: center;
		overflow-x: scroll;
	}

	output::-webkit-scrollbar {
		display: none;
	}
</style>
