<div>
	<i />
</div>

<style>
	div {
		--_size: var(--size, 2rem);
		--_color: var(--color, hsl(0, 0%, 96%));

		position: relative;
		width: var(--_size);
		margin: 0 auto;
		display: flex;
		justify-content: center;
	}

	i,
	div::before,
	div::after {
		bottom: 0;
		width: 0;
		height: 0;
		border-radius: 50%;
		border: calc(var(--_size) * 0.125) solid var(--_color);
		animation: bounce 1s linear infinite;
	}

	div::before {
		left: 0;
		animation-delay: 0.2s;
	}

	div::after {
		right: 0;
		animation-delay: 0.6s;
	}

	i {
		animation-delay: 0.4s;
	}

	@keyframes bounce {
		0% {
			transform: translateY(0);
		}
		15% {
			transform: translateY(calc(var(--_size) / 2 * -1));
		}

		30% {
			transform: translateY(0);
		}
	}
</style>
