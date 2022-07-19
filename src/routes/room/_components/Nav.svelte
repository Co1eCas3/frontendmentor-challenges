<script>
	import { onMount } from 'svelte';
	import { crossfade, fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	let nav,
		isMobile = true,
		mobileNavOpen = false;

	$: flyDist = nav && nav.clientHeight * -1;

	const crossfadeKey = Symbol();
	const [send, receive] = crossfade({
		duration: 200,
		easing: cubicOut
	});

	onMount(() => {
		const ro = new ResizeObserver(([nav]) => {
			if (nav.contentRect.width > 1000) {
				isMobile = false;
				mobileNavOpen = false;
			} else isMobile = true;
		});

		ro.observe(nav);
		return () => ro.disconnect();
	});
</script>

<nav bind:this={nav}>
	{#if isMobile}
		<button class="nav-toggle" on:click={() => (mobileNavOpen = !mobileNavOpen)}>
			{#if mobileNavOpen}
				<img
					src="/room/icon-close.svg"
					alt="Close navigation menu"
					in:send={{ key: crossfadeKey }}
					out:receive={{ key: crossfadeKey }}
				/>
			{:else}
				<img
					src="/room/icon-hamburger.svg"
					alt="Open navigation menu"
					in:send={{ key: crossfadeKey }}
					out:receive={{ key: crossfadeKey }}
				/>
			{/if}
		</button>
	{/if}

	<h1>
		<img src="/room/logo.svg" alt="Room logo" />
	</h1>

	{#if !isMobile || mobileNavOpen}
		<menu transition:fly={{ y: flyDist, duration: 200, opacity: 1 }}>
			<ul>
				{#each ['Home', 'Shop', 'About', 'Contact'] as link, i}
					<li in:fly={{ y: flyDist, duration: 200, opacity: 1, delay: (i + 1) * 100 }}>
						<a href="#">{link}</a>
					</li>
				{/each}
			</ul>
		</menu>
	{/if}
</nav>

<style>
	nav {
		position: absolute;
		z-index: 99;
		top: 0;
		left: 0;
		width: 100%;
		height: 8em;
		font-weight: var(--ft-wt__bold);
		text-transform: lowercase;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
	}

	button {
		position: absolute;
		z-index: 199;
		top: 0;
		left: 0;
		height: 100%;
		padding: 0 2em;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	button img {
		position: absolute;
	}

	menu {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		padding: 0 2em;
		background-color: var(--clr__wt);
		color: var(--clr__blk);
	}

	ul {
		height: 100%;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		gap: 2em;
	}

	li {
		position: relative;
		display: flex;
		justify-content: center;
	}

	@media screen and (min-width: 1000px) {
		nav {
			justify-content: flex-start;
		}

		h1 {
			padding: 0 3em;
		}

		menu {
			position: initial;
			padding: 0;
			background-color: unset;
			color: var(--clr__wt);
		}

		ul {
			justify-content: unset;
		}

		li::after {
			top: 1.5em;
			left: calc(50% - 0.5em);
			width: 0;
			height: 100%;
			margin: 0 auto;
			border-bottom: 2px solid var(--clr__wt);
			transition: width 0.15s;
		}

		li:hover::after {
			width: 1em;
		}
	}
</style>
