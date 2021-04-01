/**
 * Routes
 * =====================
 * All app routes
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */
import Home from "@app/pages/home/home.svelte";
import Wild from "@app/pages/wild/wild.svelte";
import NotFound from "@app/pages/404/404.svelte";

export default {
	"/": Home,
	"/wild": Wild,
	"/wild/*": Wild,
	"*": NotFound,
};
