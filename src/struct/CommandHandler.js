const fs = require("fs");
const path = require("path");
const Discord = require("discord.js");
const logger = require("../util/Logger");

module.exports = class CommandHandler {
	constructor (client) {
		this.client = client;
		this.commands = new Discord.Collection();
		this.categories = [];
		this.cooldowns = new Discord.Collection();
		this.config = this.client.config;
	}

	processCommandsDir (rootDir) {
		logger.log("Processing commands...");
		if (!fs.existsSync(rootDir)) {
			return logger.log(`Supplied commands directory doesn't exist: ${rootDir}`,
				"err!");
		}

		fs.readdir(rootDir,
			(err, cats) => {
				cats.forEach((cat) => {
					fs.readdir(path.join(rootDir,
						cat),
					(err, commands) => {
						commands.forEach((command) => {
							this.registerCommand(require(path.join(rootDir,
								cat,
								command)),
							cat);
						});
					});
				});
			});
	}

	registerCommand (command, cat) {
		if (this.categories.indexOf(cat) == -1) {
			this.categories.push(cat);
		}
		if (this.commands.get(command.name)) {
			return logger.log(`A command with the name '${command.name}' has already been loaded, skipping...`,
				"warn");
		}
		try {
			const commandStructure = {
				file: command,
				category: cat || "other"
			};

			this.commands.set(command.name,
				commandStructure);
			logger.log(`Loaded command: ${commandStructure.category} - ${command.name}`);
		} catch (e) {
			logger.log(`${cat} - ${command.name}: ${e.message}`,
				"err!");
		}
	}

	isCommand (msg) {
		if (!msg.content.startsWith(this.client.config.prefix)) {
			return false;
		}
		const cmd = msg.content.slice(this.client.config.prefix.length).split(/ +/).
			shift().
			toLowerCase();

		if (this.commands.has(cmd) || this.commands.find((c) => c.file.aliases.includes(cmd))) {
			return true;
		}

		return false;
	}

	runCommand (msg) {
		const args = msg.content.slice(this.client.config.prefix.length).split(/ +/),
			cmd = args.shift().toLowerCase(),
			command = this.commands.get(cmd) || this.commands.find((c) => c.file.aliases.includes(cmd));

		if (command.staffOnly) {
			if (!msg.member.hasPermission("KICK_MEMBERS")) {
				try {
					msg.delete(500);
				} catch (_) {return;}

				return msg.channel.send({"embed": {
					"title": "Sorry!",
					"description": `You need to have the KICK_MEMBERS permission to use this command, ${msg.author}`
				}}).then((m) => m.delete(5000));

			}
		}

		if (!this.cooldowns.has(command.name)) {
			this.cooldowns.set(command.name,
				new Discord.Collection());
		}

		const now = Date.now(),
			timestamps = this.cooldowns.get(command.name),
			cooldownTime = (command.cooldown || this.config.defaultCommandCooldown) * 1000;

		if (timestamps.has(msg.author.id)) {
			const expirationTime = timestamps.get(msg.author.id) + cooldownTime;
			if (now < expirationTime) {
				const timeLeft = (expirationTime - now) / 1000;

				try {
					msg.delete(500);
				} catch (_) {return;}

				return msg.channel.send({"embed": {
					"title": "Sorry!",
					"description": `This command is on cooldown, please wait ${timeLeft.toFixed(1)} seconds.`
				}}).then((m) => m.delete(5000));
			}
		}

		try {
			command.file.execute(this.client,
				msg,
				args);
		} catch (e) {
			msg.channel.send({"embed": {
				"title": "Something went wrong while trying to execute that command, check the console for details."
			}});

			return logger.log(`Error occured in command: ${command.file.name}:\n\n${e}`,
				"err");
		}
	}
};

