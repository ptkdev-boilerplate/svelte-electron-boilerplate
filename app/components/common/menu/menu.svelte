<script lang="ts">
	/**
	 * Menu HTML
	 * =====================
	 *
	 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
	 *
	 * @license: MIT License
	 *
	 */
	import DarkMode from "@components/common/darkmode/darkmode.svelte";
	import "./menu.ts";
</script>

<nav class="navbar" role="navigation" aria-label="main navigation">
	<div class="navbar-brand">
		<a href="#/" role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-basic">
			<span aria-hidden="true" />
			<span aria-hidden="true" />
			<span aria-hidden="true" />
		</a>
	</div>

	<div id="navbar-basic" class="navbar-menu">
		<div class="navbar-start">
			<a href="#/" class="navbar-item"> Home </a>

			<div class="navbar-item has-dropdown is-hoverable">
				<a href="#/wild" class="navbar-link"> Wild </a>

				<div class="navbar-dropdown">
					<a href="#/wild/about" class="navbar-item"> About </a>
					<a href="#/wild/contacts" class="navbar-item"> Contacts </a>
				</div>
			</div>
		</div>
	</div>

	<div class="navbar-end">
		<div class="navbar-item">
			<DarkMode />
		</div>
	</div>
</nav>

<style lang="scss">
	@import "./menu.scss";
</style>
