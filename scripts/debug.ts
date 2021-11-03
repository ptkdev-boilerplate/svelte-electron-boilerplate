/**
 * Disable debug
 * =====================
 * Check if configs/config.js has debug to off
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */
import * as fs from "fs";
import * as shell from "shelljs";
import * as yargs from "yargs";

declare const __dirname: string;

const argv: any = yargs.options({
	enable: { type: "boolean" },
}).argv;

const path = `${__dirname}/../app/configs/config.js`;

if (fs.existsSync(path)) {
	if (argv.enable) {
		shell.sed("-i", '"debug": false', '"debug": true', path);
	} else {
		shell.sed("-i", '"debug": true', '"debug": false', path);
	}
}
