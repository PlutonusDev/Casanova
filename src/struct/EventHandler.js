const fs = require("fs");
const logger = require("../util/Logger");

module.exports = class EventHandler {

	constructor (client) {
		this.client = client;
	}

	bindEvents () {
		fs.readdir("./src/events/",
			(err, files) => {
				files.forEach((e) => {
					const event = e.replace(/\.js$/i,
						"");
					this.client.on(event,
						(data) => require(`../events/${event}`)(this.client,
							data));
					logger.log(`Loaded event: ${event}`);
				});
			});
	}

};
