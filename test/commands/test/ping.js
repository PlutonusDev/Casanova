module.exports = {
	name: "ping",
	aliases: ["pong", "bing"],
	cooldown: 5,
	staffOnly: false,

	execute: (client, msg, args) => {
		msg.reply("pong!");
	}
}
