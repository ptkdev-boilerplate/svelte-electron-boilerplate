<script lang="ts">
	/**
	 * Home HTML
	 * =====================
	 *
	 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
	 *
	 * @license: MIT License
	 *
	 */
	import Menu from "@components/common/menu/menu.svelte";
	import Footer from "@components/common/footer/footer.svelte";
	import { translate } from "@app/translations/translate";
</script>

<Menu />

<div id="container">
	<section class="hero is-medium is-primary is-bold">
		<div class="hero-body">
			<div class="container">
				<h1 class="title">{translate("hello_world")}</h1>
				<h2 class="subtitle">{translate("app_name")}</h2>
			</div>
		</div>
	</section>
	<div class="content has-text-centered">app/pages/home.svelte</div>
</div>

<Footer />

<style lang="scss">
	@import "./home.scss";
</style>
