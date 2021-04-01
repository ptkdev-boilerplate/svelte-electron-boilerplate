<script lang="ts">
	/**
	 * Dark Mode HTML
	 * =====================
	 *
	 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
	 *
	 * @license: MIT License
	 *
	 */
	import { onMount } from "svelte";
	import { darkModeToggle, darkModeDetect, darkmode } from "./darkmode";

	let checked = darkmode;

	onMount(async () => {
		checked = darkModeDetect();
	});
</script>

<div class="field">
	<input id="dark-mode" type="checkbox" name="dark-mode" class="switch" on:click={() => darkModeToggle()} {checked} />
	<label for="dark-mode" />
</div>
