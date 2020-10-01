const {dependencies} = require("../../package.json");
let process;
let depCheck = 0;

Object.keys(dependencies).forEach((dep) => {

	try {
		require.resolve(dep);
	} catch (_) {
		console.log(`Missing dependency: ${dep}@${dependencies[dep]}`);
		depCheck++;
	}

});
if (depCheck > 0) {
	console.log(`Trio could not start because ${depCheck} dependenc${depCheck > 1 ? "ies aren't" : "y isn't"} installed.`);
	process.exit(0);
}

const logger = require("../util/Logger");

const {Client} = require("discord.js"),
	wait = require("util").promisify(setTimeout);

logger.log("Dependency check successful!");

class TrioClient extends Client {
	constructor (config) {
		super();
		wait(50).then(() => {
			logger.log("Starting Trio...");

			this.config = config || false;
			this.logger = logger;

			this.on("error", (e) => logger.log(`Error: ${e}`))

			if (!this.config) {
				logger.log("No configuration supplied, using defaults.");
				this.config = {
					prefix: ";",
					useDemoEvents: true
				};
			}

			if (this.config.useDemoEvents) {
				this.eventHandler = new (require("./EventHandler"))(this);
				this.eventHandler.bindEvents();
				this.commandHandler = new (require("./CommandHandler"))(this);
				this.commandHandler.processCommandsDir(this.config.commands || "commands");
			}

			return this;
		});
	}

	set (a, b) {
		this[a] = b;
	}

}

module.exports = Client;
