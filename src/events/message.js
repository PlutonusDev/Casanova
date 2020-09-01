module.exports = (client, msg) => {
	if (client.commandHandler.isCommand(msg)) {
		client.logger.log(`${msg.author.tag} ran command: ${msg.content.split(/ +/).shift().
			toLowerCase()}`);
		client.commandHandler.runCommand(msg);
	}
};
