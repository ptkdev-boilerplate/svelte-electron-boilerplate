<script lang="ts">
	/**
	 * Wild HTML
	 * =====================
	 * Svelte Page
	 *
	 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
	 *
	 * @license: MIT License
	 *
	 */
	import Menu from "@components/common/menu/menu.svelte";
	import Footer from "@components/common/footer/footer.svelte";

	export let params = { wild: "" };
</script>

<Menu />

<div id="container">
	<section class="hero is-medium is-primary is-bold">
		<div class="hero-body">
			<div class="container">
				<h1 class="title">Wildcard!</h1>
			</div>
		</div>
	</section>
	<div class="content has-text-centered">
		<p>
			Anything in the URL after <code>/wild/</code> is shown below as message. That's found in the <code>params.wild</code> prop.
		</p>

		<p>Your message is: {params.wild}</p>
	</div>
</div>

<Footer />

<style lang="scss">
	@import "./wild.scss";
</style>
