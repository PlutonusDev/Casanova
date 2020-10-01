const Trio = require("../");
const config = require("./data/config");
const wait = require("util").promisify(setTimeout);

const Client = new Trio.TrioClient(config)
const token = config.auth["bot-token"];

Client.login(token);

wait(100).then(() => Client.logger.log(`This is a test run of Trio, and will automatically quit after 60 seconds.`, "exec"));

wait(60000).then(() => {
	Client.logger.log(`Test completed!`, "exec");
    Client.destroy();
});
