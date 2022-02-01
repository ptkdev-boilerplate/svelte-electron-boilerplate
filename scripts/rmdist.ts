/**
 * Delete dist folder
 * =====================
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */
import * as shell from "shelljs";
declare const __dirname: string;

const path_dist = `${__dirname}/../dist`;
const path_build = `${__dirname}/../build`;

shell.rm("-Rf", path_dist);
shell.rm("-Rf", path_build);
