/**
 * Git Hash
 * =====================
 * Get version and hash of commits
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */
import Logger from "@ptkdev/logger";
import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import semver from "../package.json";

const gitdotfile = `${__dirname}/../.git/config`;
const logger = new Logger();
let branch = "";
let hash = "";

const execSyncWrapper = (command: string) => {
	let stdout = "";
	try {
		stdout = execSync(command).toString().trim();
	} catch (error) {
		logger.error(JSON.stringify(error));
	}
	return stdout;
};

if (fs.existsSync(gitdotfile)) {
	branch = execSyncWrapper("git rev-parse --abbrev-ref HEAD");
	hash = execSyncWrapper("git rev-parse --short=7 HEAD");
}

const obj = {
	semver: semver.version.split("-")[0],
	branch,
	hash,
};

fs.writeFileSync(path.resolve("app/configs", "version.json"), JSON.stringify(obj, null, "\t"));
