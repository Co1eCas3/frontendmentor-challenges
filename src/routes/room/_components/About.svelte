<aside>
	<img src="/room/image-about-dark.jpg" alt="About table and chairs" />

	<figure>
		<figcaption>
			<h3>About our furniture</h3>
		</figcaption>
		<p>
			Our multifunctional collection blends design and function to suit your individual taste. Make
			each room unique, or pick a cohesive theme that best expresses your interests and what
			inspires you. Find the furniture pieces you need, from traditional to contemporary styles or
			anything in between. Product specialists are available to help you create your dream space.
		</p>
	</figure>

	<img src="/room/image-about-light.jpg" alt="About chair" />
</aside>

<style>
	aside {
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		gap: 2em;
	}

	img {
		height: 30vh;
		width: 100%;
		object-fit: cover;
	}

	figure {
		flex-basis: 40vh;
		width: 100%;
		padding: 0 2em;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 2em;
	}

	figcaption {
		text-transform: uppercase;
		/* font-size: larger; */
		letter-spacing: 0.5em;
	}

	p {
		/* max-width: 45ch; */
		color: var(--ft-clr__body);
		line-height: 1.5em;
	}

	@media screen and (min-width: 700px) {
		aside {
			height: auto;
			flex-direction: row;
			flex-wrap: wrap;
			gap: 0;
		}

		img {
			width: 50%;
		}

		img:first-of-type {
			order: 1;
		}

		img:last-of-type {
			order: 2;
		}

		figure {
			flex-basis: auto;
			order: 3;
			flex-grow: 2;
			margin: 2em 0 10em 0;
		}
	}

	@media screen and (min-width: 1000px) {
		aside {
			flex-basis: 40vh;
		}

		img {
			order: unset;
			width: 30%;
			height: 40vh;
		}

		figure {
			order: 2;
			width: 40%;
			margin: 0;
		}
	}
</style>
