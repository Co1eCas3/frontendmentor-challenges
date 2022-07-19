<script>
	import { theme } from '../_stores/theme';
</script>

<header>
	<h1>calc</h1>

	<form>
		{#each theme.available() as _theme}
			<input type="radio" name={_theme} id={_theme} />
		{/each}
	</form>
</header>
