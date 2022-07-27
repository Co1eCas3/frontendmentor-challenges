<script>
	import { onMount } from 'svelte';
	import { fly, crossfade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	import { throttle } from '$lib/utils';

	import Logo from './icons/Logo.svelte';

	let headerEl;

	let isMobile = true,
		mobileNavOpen = false;

	onMount(() => {
		const ro = new ResizeObserver(([header]) => {
			if (header.contentRect.width > 1000) {
				isMobile = false;
				mobileNavOpen = false;
			} else {
				isMobile = true;
			}
		});

		ro.observe(headerEl);
		return () => ro.disconnect();
	});

	let viewHeight,
		scrollPos,
		prevScrollPos,
		hideHeader = false;

	function handleScroll() {
		mobileNavOpen = false;
		const isScrolledHalfPlus = scrollPos > viewHeight / 2;
		const isScrollingUp = scrollPos < prevScrollPos;

		hideHeader = isScrolledHalfPlus && !isScrollingUp;

		prevScrollPos = scrollPos;
	}

	function handleMobileNavToggle() {
		if (mobileNavOpen) {
			mobileNavOpen = false;
			handleScroll();
		} else {
			mobileNavOpen = true;
			hideHeader = false;
		}
	}

	const [send, receive] = crossfade({
		duration: 250
	});

	const key = Symbol();
</script>

<svelte:window
	bind:scrollY={scrollPos}
	bind:innerHeight={viewHeight}
	on:scroll={throttle(handleScroll, 150)}
/>

<header
	bind:this={headerEl}
	class:hideHeader
	on:mouseenter={() => (hideHeader = false)}
	on:mouseleave={handleScroll}
>
	<Logo />

	{#if !isMobile || mobileNavOpen}
		<nav transition:fly={{ y: viewHeight * -1, duration: 550, easing: cubicOut }}>
			<a href="#">Home</a>
			<a href="#">About</a>
			<a href="#">Contact</a>
			<a href="#">Blog</a>
			<a href="#">Careers</a>
		</nav>
	{/if}

	{#if !isMobile}
		<button class="btn__call-to-action">
			<a href="#"> Request Invite </a>
		</button>
	{/if}
</header>

{#if isMobile}
	<button class="mobile-nav-toggle" on:click={handleMobileNavToggle}>
		{#if mobileNavOpen}
			<img
				in:send={{ key }}
				out:receive={{ key }}
				src="/easybank/icon-close.svg"
				alt="Close nav button"
			/>
		{:else}
			<img
				in:send={{ key }}
				out:receive={{ key }}
				src="/easybank/icon-hamburger.svg"
				alt="Open nav button"
			/>
		{/if}
	</button>
{/if}

<style>
	header,
	.mobile-nav-toggle {
		padding: 1em var(--page__padding-l);
	}

	header {
		--fill: var(--ft-clr__head);

		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
		width: 100vw;
		background-color: var(--clr__wt) !important;
		display: flex;
		justify-content: space-between;
		align-items: center;
		transition: top 0.5s;
	}

	.hideHeader {
		top: -100%;
	}

	.mobile-nav-toggle {
		position: fixed;
		top: 0;
		right: 0;
		z-index: 101;
		height: 3.3em;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.mobile-nav-toggle img {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		filter: drop-shadow(4px 4px 4px var(--clr__wt));
	}

	nav {
		position: absolute;
		z-index: -1;
		top: 3.3em;
		left: 0;
		right: 0;
		width: 100vw;
		height: 100vh;
		border-radius: 0.3em;
		padding: 2em 0;
		background: var(--clr-gradient__dark-transparent);
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	/* header::before {
		top: 0;
		left: 0;
		z-index: 99;
		width: 100vw;
		height: 100vh;
		background: var(--clr-gradient__dark-transparent);
	} */

	nav a {
		width: min(90%, 45ch);
		padding: 1em 0;
		background-color: var(--clr__wt);
		color: var(--ft-clr__body);
		text-align: center;
		transition: color 0.2s;
	}

	nav a:first-of-type {
		border-radius: 0.3em 0.3em 0 0;
	}

	nav a:last-of-type {
		border-radius: 0 0 0.3em 0.3em;
	}

	nav a:hover,
	nav a:active {
		color: var(--ft-clr__head);
	}

	@media screen and (min-width: 1000px) {
		header {
			transition: all 0.4s;
		}

		.hideHeader {
			top: 0;
			padding: 1em calc(var(--page__padding-l) / 2);
			background-color: transparent !important;
			font-size: 0.75em;
			opacity: 0.5;
		}

		.hideHeader nav {
			opacity: 0;
		}

		nav {
			position: static;
			width: unset;
			height: 100%;
			padding: 0;
			background: none;
			flex-direction: row;
			gap: 1em;
			transition: opacity 0.2s;
		}

		nav a {
			position: relative;
			width: min-content;
			height: 100%;
			padding: 0;
		}

		nav a::after {
			top: 100%;
			left: 0;
			right: 0;
			width: 0;
			height: 100%;
			margin: 0 auto;
			border-bottom: 4px solid var(--clr-prim__cyan);
			transition: width 0.2s;
		}

		nav a:hover::after {
			width: 100%;
		}
	}
</style>
