<script lang="ts">
	/**
	 * Index HTML
	 * =====================
	 * Svelte Page
	 *
	 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
	 *
	 * @license: MIT License
	 *
	 */
	import Router from "svelte-spa-router";
	import routes from "./routes";
</script>

<Router {routes} />

<style lang="scss" global>
	@import "../../../node_modules/bulma/css/bulma";
	@import "./global.scss";
</style>
