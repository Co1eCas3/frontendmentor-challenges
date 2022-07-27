<script>
	export let title;
	export let byLine;
	export let content;
	export let img;
</script>

<figure>
	<figcaption>
		<cite>
			<h3 class="text__head">{title}</h3>
			By {byLine}
		</cite>
	</figcaption>

	<img src={img.path} alt={img.caption} />

	<p class="text__body">{content}</p>
</figure>

<style>
	figure {
		max-width: 35ch;
		margin: 0 auto;
		background-color: var(--clr__wt);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1em;
	}

	figcaption,
	p {
		margin: 0 2em;
	}

	figcaption {
		order: 2;
	}

	cite {
		font-style: inherit;
		display: flex;
		flex-direction: column-reverse;
		gap: 1em;
	}

	h3 {
		font-size: var(--ft-sz__head-card) !important;
	}

	img {
		order: 1;
		width: 100%;
		height: 200px;
		object-fit: cover;
		object-position: center;
	}

	p {
		order: 3;
		margin-bottom: 2em;
	}

	@media screen and (min-width: 1415px) {
		figure {
			flex-basis: 35ch;
		}
	}
</style>
