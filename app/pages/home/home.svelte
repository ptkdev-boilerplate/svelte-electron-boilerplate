<script lang="ts">
	/**
	 * Home HTML
	 * =====================
	 * Svelte Page
	 *
	 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
	 *
	 * @license: MIT License
	 *
	 */
	import Menu from "../../components/common/menu/menu.svelte";
	import Footer from "../../components/common/footer/footer.svelte";
	import List from "../../components/list/list.svelte";
	import Login from "../../components/login/login.svelte";
	import { login, logged, token } from "../../components/login/login";
	let logged2 = false;
	logged.subscribe((value) => (logged2 = value));
</script>

<Menu />

{#if $token != null || logged2 == true}
	<List />
{:else}
	<Login {login} />
{/if}

<Footer />

<style lang="scss">
	@import "./home.scss";
</style>
