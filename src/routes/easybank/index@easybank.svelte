<script>
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	import Hero from './_components/Hero.svelte';
	import AboutAtAGlance from './_components/aboutAtAGlance/AboutAtAGlance.svelte';
	import ArticlesAtAGlance from './_components/articlesAtAGlance/ArticlesAtAGlance.svelte';
</script>

<Hero />

<AboutAtAGlance />

<ArticlesAtAGlance />
