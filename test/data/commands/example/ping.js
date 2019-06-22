module.exports = {
    name: "ping",
    description: "Pong!",
    adminOnly: false,
    cooldown: 5,
    
    execute(client, msg, args) {
        return msg.reply("pong!");
    }
}