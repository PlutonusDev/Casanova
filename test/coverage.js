const Trio = require("../");
const config = require("./data/config");
const wait = require("util").promisify(setTimeout);

const Client = new Trio.Client(config);
const token = config.auth["bot-token"];

Client.set("coverage", true);
Client.login(token);

wait(1000).then(() => {
	Client.logger.log("Coverage");
	Client.logger.log("Coverage", "warn");
	Client.logger.log("Coverage", "err!");
	Client.logger.log("Coverage", "exec");
});

wait(5000).then(() => Client.destroy());
