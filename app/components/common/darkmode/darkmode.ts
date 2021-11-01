/**
 * DarkMode Typescript
 * =====================
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */
let darkmode = false;

/**
 * DarkMode Toggle
 * =====================
 * Return true or false if darkmode is enabled
 *
 * @return {boolean} darkmode - true = dark mode enabled, false = light mode enabled
 *
 */
const darkModeToggle = (): boolean => {
	if (document.querySelector("html")?.classList.contains("darkmode")) {
		darkmode = false;
	} else {
		darkmode = true;
	}

	document.querySelector("html")?.classList.toggle("darkmode");
	document.querySelector("body")?.classList.toggle("darkmode");

	window.localStorage.setItem("darkmode", darkmode ? "enabled" : "disabled");

	return darkmode;
};

/**
 * DarkMode Detect
 * =====================
 * Check if exist prefers-color-scheme or darkmode value from localStorage() and set dark mode
 *
 * @return {boolean} darkmode - true = dark mode enabled, false = light mode enabled
 *
 */
const darkModeDetect = (): boolean => {
	if (
		window.localStorage.getItem("darkmode") === "enabled" ||
		(window.localStorage.getItem("darkmode") === undefined &&
			window?.matchMedia("(prefers-color-scheme: dark)").matches)
	) {
		if (!document.querySelector("html")?.classList.contains("darkmode")) {
			document.querySelector("html")?.classList.add("darkmode");
			document.querySelector("body")?.classList.add("darkmode");
		}

		return true;
	}

	return false;
};

export { darkModeToggle, darkModeDetect, darkmode };
