/**
 * Jest Tests
 * =====================
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */
import { darkModeToggle, darkModeDetect } from "@components/common/darkmode/darkmode";

test("darkModeToggle", async () => {
	expect(darkModeToggle()).toBe(true || false);
});

test("darkModeDetect", async () => {
	expect(darkModeDetect()).toBe(true || false);
});
