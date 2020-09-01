let process;

module.exports = (client, event) => {
	switch (event.code) {
	case 1000: {
		client.logger.log("Disconnected from Discord cleanly.");
		break;
	}
	case 4004: {
		client.logger.log("An invalid Bot Token was provided in config.js",
			"err");
		client.logger.log("Please check it and try again.");
		process.exit(0);
		break;
	}
	default: {
		client.logger.log(`Disconnected from Discord unexpectedly, code ${event.code}`,
			"err");
		break;
	}
	}
};
