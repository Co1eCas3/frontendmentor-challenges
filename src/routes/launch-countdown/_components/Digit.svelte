<script>
	import { afterUpdate, beforeUpdate, onMount } from 'svelte';

	export let position;
	export let val;

	const positionTitles = ['DAYS', 'HOURS', 'MINUTES', 'SECONDS'];

	let prev = val;
</script>

{#key val}
	<figure>
		<figcaption>
			<h2>{positionTitles[position]}</h2>
		</figcaption>

		<div class="cont">
			<div class="el top">
				<data>{val}</data>
			</div>
			<div
				class="el next front"
				on:animationend={({ target }) => (target.style.visibility = 'hidden')}
			>
				<data>{prev}</data>
			</div>
			<div class="el next back" on:animationend={() => (prev = val)}>
				<data>{val}</data>
			</div>
			<div class="el bottom">
				<data>{prev}</data>
			</div>
		</div>
	</figure>
{/key}

<style>
	figure {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1em;
	}

	figcaption {
		order: 2;
		font-size: 0.3em;
	}

	.cont {
		order: 1;
		position: relative;
		color: var(--clr-prim__red);
		perspective-origin: center;
		perspective: 90px;
	}

	.el {
		position: relative;
		width: 3ch;
		border-radius: 0.2em;
		background-color: var(--clr-neut__blue-lt);
		font-size: 2em;
		font-family: 'Red Hat Text', sans-serif;
		line-height: 100%;
		letter-spacing: initial;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		transform-style: preserve-3d;
	}

	data {
		position: relative;
	}

	.top,
	.bottom {
		z-index: 1;
	}

	.top,
	.front {
		opacity: 0.6;
	}

	.top data,
	.front data {
		top: 0.5em;
	}

	.back data,
	.bottom data {
		top: -0.5em;
	}

	.front,
	.back {
		position: absolute;
		height: 1em;
	}

	.front {
		top: 0;
		z-index: 3;
		transform-origin: bottom;
		animation: flip-top 0.2s;
	}

	.back {
		z-index: 2;
		transform-origin: top;
		transform: rotateX(-0.75turn);
		animation: flip-bottom 0.2s 0.1s;
	}

	@keyframes flip-top {
		0% {
			transform: rotateX(0);
		}
		100% {
			transform: rotateX(-0.25turn);
		}
	}

	@keyframes flip-bottom {
		0% {
			transform: rotateX(-0.75turn);
		}
		100% {
			transform: rotateX(-1turn);
		}
	}
</style>
