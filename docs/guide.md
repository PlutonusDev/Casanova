## Getting Started
# Create App and Bot Account
1. Go to the [Discord Developers Application Page](https://discordapp.com/developers/applications/me).
![Page](https://i.imgur.com/wR7rfee.png)

2. Create a **New Application** and give it a name.
![Page](https://i.imgur.com/sx2y9Li.png)

3. On the sidebar, navigate to **Bot**, then click **Add Bot** and confirm it.
![Page](https://i.imgur.com/lxGiCVV.png)

4. Visit `https://discordapp.com/oauth2/authorize?client_id=APP_ID&scope=bot`, replacing **APP_ID** with the **Client/Application ID** from the **General Information** page, to add the bot to your server (or ask a server admin to do it for you).
![Page](https://i.imgur.com/qiyBgR0.png)

5. Copy your bot's **Token** and save it for later.
<br/>

# Linux Installation
Install the following through your package manager:
- [nodejs](https://nodejs.org/en/download/package-manager/) (Version 6.X.X^ required)

Once you have that installed, create a folder for your project and install Trio:
`mkdir mybot && cd mybot`
`npm install discord.js-trio`

**For voice support** add `npm install opusscript` (easy setup) or `npm install node-opus` (better performance but requires `python 2.7.x` and `build-essential`). **BOTH** OpusScript and NodeOpus require `ffmpeg` to run on your system, installed through `sudo apt-get install ffmpeg`.
<br/>

# Windows Installation
Install the following software:
- nodejs from [the downloads page](https://nodejs.org/en/download/) (Version 6.X.X^ required)

If you need voice support, you will also need 2 more things:
- FFMPEG, which is available [on this page](http://adaptivesamples.com/how-to-install-ffmpeg-on-windows/)
- The new windows build tools:
  - Open **Command Prompt** or **PowerShell** as Administrator
  - Run the following command: `npm i -g --production windows-build-tools`
  - This installs Python 2.7 and the C++ Build Tools standalone.

Once you have all this installed, create a folder for your project and install Trio:<br/>
`md mybot`<br/>
`cd mybot`<br/>
`npm install discord.js-trio`


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