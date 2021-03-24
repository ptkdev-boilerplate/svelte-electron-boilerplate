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
import Home from "../home/home.svelte";
import Name from "../name/name.svelte";
import List from "../../components/list/list.svelte";
import Wild from "../wild/wild.svelte";
import NotFound from "../404/404.svelte";

export default {
	"/": Home,
	"/list": List,
	"/hello/:first/:last?": Name,
	"/wild": Wild,
	"/wild/*": Wild,
	"*": NotFound,
};
