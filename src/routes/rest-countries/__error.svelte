<script context="module">
	export async function load({ error }) {
		return { props: { error } };
	}
</script>

<script>
	export let error;
</script>

<pre>{error}</pre>
