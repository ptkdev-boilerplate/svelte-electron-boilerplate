<script lang="ts">
	/**
	 * Menu HTML
	 * =====================
	 * Svelte Page
	 *
	 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
	 *
	 * @license: MIT License
	 *
	 */
	import "./menu.ts";
</script>

<nav class="navbar" role="navigation" aria-label="main navigation">
	<div class="navbar-brand">
		<a class="navbar-item" href="https://bulma.io">
			<img src="https://bulma.io/images/bulma-logo.png" alt="logo" title="logo" width="112" height="28" />
		</a>

		<a href="#" role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
			<span aria-hidden="true" />
			<span aria-hidden="true" />
			<span aria-hidden="true" />
		</a>
	</div>

	<div id="navbarBasicExample" class="navbar-menu">
		<div class="navbar-start">
			<a href="#" class="navbar-item"> Home </a>

			<a href="#" class="navbar-item"> Documentation </a>

			<div class="navbar-item has-dropdown is-hoverable">
				<a href="#" class="navbar-link"> More </a>

				<div class="navbar-dropdown">
					<a href="#" class="navbar-item"> About </a>
					<a href="#" class="navbar-item"> Jobs </a>
					<a href="#" class="navbar-item"> Contact </a>
					<hr class="navbar-divider" />
					<a href="#" class="navbar-item"> Report an issue </a>
				</div>
			</div>
		</div>

		<div class="navbar-end">
			<div class="navbar-item">
				<div class="buttons">
					<a href="#" class="button is-primary">
						<strong>Sign up</strong>
					</a>
					<a href="#" class="button is-light"> Log in </a>
				</div>
			</div>
		</div>
	</div>
</nav>

<style lang="scss">
	@import "./menu.scss";
</style>
