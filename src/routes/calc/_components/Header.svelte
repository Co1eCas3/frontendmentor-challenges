<script>
	import { theme } from '../_stores/theme';

	let radioGroupWidths = [];
	$: radioGroupFullwidth = radioGroupWidths
		.slice(0, radioGroupWidths.length - 1)
		.reduce((res, width) => (res += width), 0);
</script>

<header>
	<h1>calc</h1>

	<form>
		<fieldset
			on:click={() => theme.switch()}
			style:--radioTranslateDist="{radioGroupWidths[0]}px"
			style:--lastRadioTranslateDist="-{radioGroupFullwidth}px"
		>
			<legend>Theme</legend>

			{#each theme.available() as _theme, i}
				<div class="radio-group" bind:clientWidth={radioGroupWidths[i]}>
					<label for={_theme} on:click|preventDefault>{i + 1}</label>
					<input
						type="radio"
						name="themes"
						id={_theme}
						value={_theme}
						data-count={i + 1}
						bind:group={$theme}
					/>
				</div>
			{/each}
		</fieldset>
	</form>
</header>

<style>
	header {
		width: 100%;

		color: var(--ft-clr__header);
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	form {
		position: relative;
	}

	fieldset {
		border: none;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}

	legend {
		position: absolute;
		left: -8ch;
		text-transform: uppercase;
		letter-spacing: var(--ft-sz__nano);
	}

	legend,
	label {
		font-size: var(--ft-sz__smaller);
	}

	.radio-group {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.4em;
	}

	input {
		-webkit-appearance: none;
		appearance: none;
		position: relative;
		width: 1.5em;
		aspect-ratio: 1;
		background-color: var(--clr-bg__second);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.radio-group:first-of-type input {
		border-top-left-radius: 50%;
		border-bottom-left-radius: 50%;
	}

	.radio-group:last-of-type input {
		border-top-right-radius: 50%;
		border-bottom-right-radius: 50%;
	}

	input::after {
		z-index: 10;
		width: 60%;
		aspect-ratio: 1;
		border-radius: 50%;
		background-color: var(--clr-els__accent);
		transform: translateX(var(--radioTranslateDist));
		opacity: 0;
		transform-origin: center;
		transition-property: transform, opacity;
		transition-delay: 0s, 0.15s;
		transition-duration: 0.15s, 0s;
	}

	.radio-group:last-of-type input::after {
		transform: translateX(var(--lastRadioTranslateDist));
	}

	input:checked::after {
		transform: translateX(0) !important;
		opacity: 1;
	}

	fieldset:hover input::after {
		background-color: var(--clr-els__accent-bright);
	}
</style>
