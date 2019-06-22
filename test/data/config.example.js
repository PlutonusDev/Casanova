module.exports = {
    prefix: ";",                        // the bot's prefix (command prefix)
    token: "your-bot-token-here",       // duh, the discord bot token
    commands: __dirname+"\\commands",   // your commands directory, full path.
    defaultCommandCooldown: 3           // time in seconds as the default command cooldown per user
}