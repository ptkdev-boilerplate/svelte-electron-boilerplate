<script lang="ts">
	/**
	 * Offline HTML
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
				<h1 class="title">Offline!</h1>
			</div>
		</div>
	</section>
	<div class="content has-text-centered">
		<p>You are offline!</p>
	</div>
</div>

<Footer />

<style lang="scss">
	@import "./offline.scss";
</style>
