<script lang="ts">
	/**
	 * Name HTML
	 * =====================
	 * Svelte Page
	 *
	 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
	 *
	 * @license: MIT License
	 *
	 */
	import Menu from "../../components/common/menu/menu.svelte";
	export let params: any = {};
</script>

<Menu />

<h2>Hi there!</h2>

<p>
	Your name is:
	<b>{params.first}</b>
	<b
		>{#if params.last}{params.last}{/if}</b
	>
</p>
<p>This comes from the URL, matching <code>/hello/:first/:last?</code>, where the last name is optional.</p>
<p>
	<em>Hint:</em> Try changing the URL and add your name, e.g. <code>/hello/alex</code> or <code>/hello/jane/doe</code>
</p>

<style lang="scss">
	@import "./name.scss";
</style>
