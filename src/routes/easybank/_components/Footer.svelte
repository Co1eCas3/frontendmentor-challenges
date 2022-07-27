<script>
	import Logo from './icons/Logo.svelte';
	import * as Socials from './icons/social';
</script>

<footer>
	<div class="social">
		<Logo />
		<menu>
			{#each Object.values(Socials) as social}
				<li>
					<a href="#">
						<svelte:component this={social} />
					</a>
				</li>
			{/each}
		</menu>
	</div>

	<nav class="links">
		<menu>
			<li><a href="#">About Us</a></li>
			<li><a href="#">Contact</a></li>
			<li><a href="#">Blog</a></li>
		</menu>
		<menu>
			<li><a href="#">Careers</a></li>
			<li><a href="#">Support</a></li>
			<li><a href="#">Privacy Policy</a></li>
		</menu>
	</nav>

	<div class="end">
		<button class="btn__call-to-action">
			<a href="#">Request Invite</a>
		</button>

		<small>&copy; Easybank. All Rights Reserved</small>
	</div>
</footer>

<style>
	footer {
		--fill: var(--clr__wt);

		width: 100%;
		padding: 3em var(--page__padding-l);
		background-color: var(--ft-clr__head) !important;
		color: var(--clr__wt) !important;
		display: grid;
		grid-template-areas:
			'logo'
			'social'
			'links1'
			'links2'
			'button'
			'copy';
		grid-template-columns: max-content;
		justify-content: center;
		gap: 2em;
	}

	.social,
	.links,
	.end {
		display: contents;
	}

	.social > :global(svg),
	.links li,
	.end button {
		margin: 0 auto;
	}

	.social > :global(svg) {
		grid-area: logo;
	}

	.social menu {
		grid-area: social;
		display: flex;
		justify-content: center;
		gap: 1em;
	}

	li,
	li :global(.fill-target__hover) {
		transition-property: color, fill;
		transition-duration: 0.15s;
	}

	li:hover :global(.fill-target__hover) {
		fill: var(--clr-prim__cyan);
	}

	li:hover {
		color: var(--clr-prim__cyan);
	}

	.links menu {
		display: flex;
		flex-direction: column;
		gap: 2em;
	}

	.links menu:first-of-type {
		grid-area: links1;
	}

	.links menu:last-of-type {
		grid-area: links2;
	}

	.links li {
		width: max-content;
	}

	.end button {
		grid-area: button;
	}

	.end small {
		grid-area: copy;
		color: var(--ft-clr__body);
	}

	@media screen and (min-width: 50em) {
		footer {
			grid-template:
				'logo button'
				'social copy'
				'links1 links2';
		}
	}

	@media screen and (min-width: 1000px) {
		footer {
			grid-template-areas:
				'logo links1 links2 button'
				'. links1 links2 .'
				'social links1 links2 copy';
			grid-template-columns: 1fr 1fr 2fr max-content;
			justify-content: space-between;
			gap: 1em;
		}

		.social > :global(svg),
		.links li,
		.end button {
			margin: 0;
		}

		.social menu {
			justify-content: initial;
		}

		.links menu {
			gap: 1em;
		}

		.end button {
			margin-left: auto;
		}
	}
</style>
