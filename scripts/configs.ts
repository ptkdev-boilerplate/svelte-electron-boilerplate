/**
 * Check configs.js
 * =====================
 * Check if configs/config.js exist, if don't exist rename .tpl
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */
import * as fs from "fs";
import * as shell from "shelljs";

declare const __dirname;

const path = `${__dirname}/../configs/config.js`;

if (!fs.existsSync(path)) {
	shell.cp("-Rf", `${__dirname}/../configs/config.js.tpl`, `${__dirname}/../configs/config.js`);
}
