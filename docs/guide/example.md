## Example Code
The following is a simple ping/pong bot. Save this as a js file (eg `mybot.js`), replacing the string on the last line with the secret bot token you got earlier:

```js
const Trio = require("trio");
const client = new Trio.Client();

client.on("message", message => {
    if(message.content.startsWith("!ping")) {
        message.reply("pong!")
    }
});

client.login("your-bot-token-here");
```


## Launching the Bot
In your command prompt, from inside the folder where `mybot.js` is located, launch it with:<br/>
`node mybot.js`<br/><br/>
If no errors are shown, the bot should come online and respond to you if you type `!ping`!