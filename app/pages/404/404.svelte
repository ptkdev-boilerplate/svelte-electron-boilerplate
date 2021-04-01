<script lang="ts">
	/**
	 * Error404 HTML
	 * =====================
	 *
	 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
	 *
	 * @license: MIT License
	 *
	 */
	import Menu from "@components/common/menu/menu.svelte";
	import Footer from "@components/common/footer/footer.svelte";
</script>

<Menu />

<div id="container">
	<section class="hero is-medium is-primary is-bold">
		<div class="hero-body">
			<div class="container">
				<h1 class="title">Not Found!</h1>
			</div>
		</div>
	</section>
	<div class="content has-text-centered">
		<p>Oops, this route doesn't exist!</p>
	</div>
</div>

<Footer />

<style lang="scss">
	@import "./404.scss";
</style>
