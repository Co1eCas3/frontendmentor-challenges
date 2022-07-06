<script>
	export let opt;
</script>

<button class={opt} on:touchend on:click>
	<img src="rock-paper-scissors/icon-{opt}.svg" alt={opt} />
</button>

<style>
	button {
		position: relative;
		z-index: 1;
		width: clamp(7.5rem, 15vw, 10rem);
		aspect-ratio: 1;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	button::before {
		z-index: -2;
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}

	button::after {
		z-index: -1;
		width: 80%;
		height: 80%;
		border-radius: 50%;
		background-color: #fff;
	}

	img {
		width: 40%;
	}

	.rock::before {
		background: var(--grad__rock);
	}

	.paper::before {
		background: var(--grad__paper);
	}

	.scissors::before {
		background: var(--grad__scissors);
	}
</style>
