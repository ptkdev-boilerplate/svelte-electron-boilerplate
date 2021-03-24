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
	import Menu from "../../components/common/menu/menu.svelte";
	export let params = { wild: "" };
</script>

<Menu />

<h2>Wildcard</h2>

<p>
	Anything in the URL after <code>/wild/</code> is shown below as message. That's found in the
	<code>params.wild</code> prop.
</p>

<p>Your message is: {params.wild}</p>

<style lang="scss">
	@import "./wild.scss";
</style>
