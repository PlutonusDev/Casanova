// Plutonus 22/06/19

let dependencies = require("../../package.json").dependencies;
let depCheck = 0;
Object.keys(dependencies).forEach(dep => {
    try {
        require.resolve(dep);
    } catch(_) {
        console.log(`Missing Trio dependency: ${dep}@${dependencies[dep]}`);
        depCheck++;
    }
});
if(depCheck>0) {
    console.log(`Trio could not start because ${depCheck} dependenc${depCheck>1 ? "ies aren't" : "y isn't"} installed.`);
    process.exit(0);
}

const logger = require("../util/Logger");

const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

const Discord = require("discord.js");
const wait = require("util").promisify(setTimeout);

logger.log(`Dependency check ${chalk.green("successful")}!`);

class Client extends Discord.Client {
    constructor(config) {
        super();
        wait(50).then(() => {
            logger.log(`${chalk.blue("Welcome to Trio!")}`);

            this.commands = new Discord.Collection();
            this.categories = [];
            this.cooldowns = new Discord.Collection();
            this.config = config || false;

            if(!this.config) {
                logger.log("No configuration supplied, using defaults.");
                this.config = {
                    prefix: ";"
                }
            }

            if(this.config.commands) {
                this.processCommands(this.config.commands);
            }

            if(!this.listenerCount("ready")) {
                this.on("ready", () => {
                    logger.log(`${this.user.username} ready!`);
                });
            }
            if(!this.listenerCount("message")) {
                this.on("message", msg => {
                    if(this.isCommand(msg)) {
                        logger.log(`${msg.author.tag} ran command: ${msg.content.split(/ +/).shift().toLowerCase()}`)
                        this.runCommand(msg);
                    }
                });
            }
            if(!this.listenerCount("disconnect")) {
                this.on("disconnect", event => {
                    switch(event.code) {
                        case 1000: {
                            return logger.log("Disconnected from Discord cleanly.")
                        }
                        case 4004: {
                            logger.log(`An invalid bot token was provided in the ${chalk.green("config.js")} file.`, "err!");
                            return process.exit(0);
                        }
                        default: {
                            logger.log(`Disconnected with event code: ${chalk.green(event.code)}.`, "warn");
                        }
                    }
                });
            }

            this.once("ready", () => {
                if(!this.user.bot) {
                    logger.log("Automating normal user accounts (generally called \"self-bots\") outside of the OAuth2/bot API is forbidden, and can result in an account termination if found.", "err!");
                    logger.log("https://support.discordapp.com/hc/en-us/articles/115002192352-Automated-user-accounts-self-bots-", "err!");
                    process.exit(0);
                }
            });
        });
    }

	set(a, b) {
		this[a] = b;
	}

    processCommands(rootdir) {
        if(!fs.existsSync(rootdir)) return logger.log(`Supplied commands directory does not exist: ${rootdir}`, "warn");
        fs.readdir(rootdir, (err, dirs) => {
            dirs.forEach(dir => {
                fs.readdir(path.join(rootdir, dir), (err, files) => {
                    files.forEach(file => {
                        this.registerCommand(require(path.join(rootdir, dir, file)), dir);
                    });
                });
            });
        });
    }

    registerCommand(command, category) {
        if(this.categories.indexOf(category) == -1) this.categories.push(category);
        if(this.commands.get(command.name)) return logger.log(`A command with the name ${chalk.yellow(command.name)} is already loaded!`, "warn");
        try {
            let commandStruct = {
                file: command,
                category: category || "misc"
            }
            this.commands.set(command.name, commandStruct);
            logger.log(`Loaded command: ${chalk.blue(commandStruct.category)}/${chalk.green(command.name)}`);
        } catch(e) {}
    }

    isCommand(msg) {
        if(!msg.content.startsWith(this.config.prefix)) return false;
        let cmd = msg.content.slice(this.config.prefix.length).split(/ +/).shift().toLowerCase();
		if(this.commands.has(cmd) || this.commands.find(c => c.file.aliases && c.file.aliases.includes(cmd))) return true;
		return false;
    }

    runCommand(msg) {
        let args = msg.content.slice(this.config.prefix.length).split(/ +/);
        let cmd = args.shift().toLowerCase();
		let command = this.commands.get(cmd)
		|| this.commands.find(c => c.file.aliases && c.file.aliases.includes(cmd));

        if(command.adminOnly) {
            if(!msg.member.hasPermission("KICK_MEMBERS")) {
                try{msg.delete(500)}catch(e){};
                return msg.channel.send({"embed": {
                    "title": "Sorry!",
                    "description": `You do not have permission to use that command, ${msg.author.username}!`
                }}).then(m => m.delete(5000));
            }
        }

        if(!this.cooldowns.has(command.name)) {
            this.cooldowns.set(command.name, new Discord.Collection());
        }

        const now = Date.now();
        const timestamps = this.cooldowns.get(command.name);
        const cooldownAmount = (command.cooldown || this.config.defaultCommandCooldown) * 1000;

        if(timestamps.has(msg.author.id)) {
            const expirationTime = timestamps.get(msg.author.id) + cooldownAmount;

            if(now < expirationTime) {
                const timeLeft = (expirationTime - now) / 1000;
                try{msg.delete(500)}catch(e){};
                return msg.channel.send({"embed":{
                    "title": "Slow Down!",
                    "description": `${msg.author.username}, please wait ${timeLeft.toFixed(1)} more second${timeLeft==1 ? "" : "s"} before reusing the \`${command.name}\` command.`
                }}).then(m => m.delete(5000));
            }
        }

        try {
            command.file.execute(this, msg, args);
        }catch(err) {
            logger.log(`Error occured in command: ${command.file.name}:\n\n${err}`);
        }
    }
}

module.exports = Client;