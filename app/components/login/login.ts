import { writable } from "svelte/store";

export const logged = writable(false);
export const token = writable(undefined);

export async function login(): Promise<any> {
	const response = await fetch("https://api.github.com/users?per_page=5");

	if (response.ok) {
		logged.set(true);
		window.location.hash = "#/list";
		return response.json();

	}

	return {};
}
