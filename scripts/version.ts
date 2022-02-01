/**
 * Version
 * =====================
 * Increment package.json version
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */
import * as fs from "fs";
import Logger from "@ptkdev/logger";
import { argv } from "yargs";
import pkg from "../package.json";

const logger = new Logger();

const version = pkg.version.split(".");
let next_version, patch;

switch (argv.cmd) {
	case "nightly":
		next_version = `${version[0]}.${version[1]}.${version[2]}.${Number(version[3]) + 1}`;
		break;

	case "nightly-next":
		patch = version[2].split("-");
		next_version = `${version[0]}.${version[1]}.${Number(patch[0]) + 1}-nightly.0`;
		break;

	case "beta":
		patch = version[2].split("-");
		next_version = `${version[0]}.${version[1]}.${Number(patch[0])}-beta.1`;
		break;

	case "main":
		patch = version[2].split("-");
		next_version = `${version[0]}.${version[1]}.${Number(patch[0])}`;
		break;

	default:
		next_version = "0.0.0";
		break;
}

pkg.version = next_version;

if (fs.existsSync("./package.json")) {
	fs.writeFile("./package.json", JSON.stringify(pkg), function writeJSON(error) {
		if (error) {
			logger.error(JSON.stringify(error));
		}
	});
}
