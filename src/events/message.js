module.exports = (client, msg) => {
	if (client.commandHandler.isCommand(msg)) {

		client.commandHandler.runCommand(msg);
	}
};
