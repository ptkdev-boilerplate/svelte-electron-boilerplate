module.exports = {
	server: {
		// http://localhost:[PORT]
		port: 5000,
	},

	// Default language
	language: "en",

	// Debug
	debug: "disabled",

	// LOGS
	// See: https://github.com/ptkdev/ptkdev-logger
	logger: {
		path: {
			debug_log: "./logs/debug.log",
			error_log: "./logs/errors.log",
		},
		language: "en",
		colors: true,
		debug: "enabled",
		info: "enabled",
		warning: "enabled",
		error: "enabled",
		sponsor: "enabled",
		write: false,
		type: "log",
	},
};
