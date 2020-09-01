let chalk,process;

try {
	chalk = require("chalk");
} catch (_) {
	chalk = null;
}

module.exports = (client) => {
	if (!client.user.bot || client.coverage) {
		client.logger.log(`${chalk ? chalk.red("[WARNING]") : "[WARNING]"} Automating normal user accounts (generally called "self-bots") outside of the OAuth2/bot API is ${chalk ? chalk.red("FORBIDDEN") : "FORBIDDEN"}, and can result in an account termination if found.`);
		client.logger.log(`${chalk ? chalk.red("[WARNING]") : "[WARNING]"} https://discord.com/developers/docs/topics/oauth2#bot-vs-user-acccounts`);
		if (!client.coverage) {
			client.destroy();
		}
		if (!client.coverage) {
			process.exit(0);
		}

	}
	client.logger.log(`${client.user.username} is now online in ${client.guilds.cache.size} guilds!`);
	client.logger.log(`Took ${(process.uptime() * 1000).toFixed(2)}ms to start.\n`);
};
