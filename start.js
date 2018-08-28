const liveServer = require("live-server")

const params = {
	port: 4000,
	root: "./", // Set root directory that's being served. Defaults to cwd.
	open: true,
	ignore: 'package.json,readme.md',
	file: "index.html",
}

liveServer.start(params)