<script>
	export let img;
	export let title;
	export let content;
</script>

<figure>
	<figcaption class="text__head">{title}</figcaption>

	<img src={img.path} alt={img.caption} />

	<p class="text__body sub">{content}</p>
</figure>

<style>
	figure {
		display: flex;
		flex-direction: column;
		gap: 1em;
	}

	figcaption {
		order: 2;
		margin: 1em 0;
		font-size: var(--ft-sz__head-card) !important;
	}

	img {
		order: 1;
		width: 4em;
		margin: 0 auto;
	}

	p {
		order: 3;
	}

	@media screen and (min-width: 50em) {
		figure {
			flex-basis: 47%;
		}

		img {
			margin: 0;
		}
	}

	@media screen and (min-width: 1415px) {
		figure {
			max-width: 25ch;
		}
	}
</style>
