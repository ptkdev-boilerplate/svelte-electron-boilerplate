/**
 * Svelte Init
 * =====================
 * Create svelte app
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */
import App from "@app/pages/index/index.svelte";

const app = new App({
	target: document.body,
});

export default app;
