/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * Electron
 * =====================
 * Create electron window
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */
import { app, BrowserWindow } from "electron";
import * as path from "path";
const config = require("../app/configs/config");

function createWindow() {
	const mainWindow = new BrowserWindow({
		width: 1024,
		height: 768,
		webPreferences: {
			preload: path.join(__dirname, "preload.js"),
			contextIsolation: true,
		},
	});

	if (config.debug === "enabled") {
		mainWindow.loadURL(`http://localhost:${config.server.port}`);
		mainWindow.webContents.openDevTools();
	} else {
		mainWindow.loadFile(path.join(__dirname, "../../index.html"));
	}
}

app.on("ready", () => {
	createWindow();

	app.on("activate", function () {
		if (BrowserWindow.getAllWindows().length === 0) {
			createWindow();
		}
	});
});

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});
