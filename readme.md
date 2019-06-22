<div align="center">
    <br />
    <p>
        <img src="https://i.vgy.me/VhjllM.png">
        <br />
        <img src="https://img.shields.io/github/issues/PlutonusDev/Trio.svg">
        <img src="https://img.shields.io/github/stars/PlutonusDev/Trio.svg">
        <img src="https://img.shields.io/npm/dw/discord.js-trio.svg">
        <img src="https://img.shields.io/npm/l/discord.js-trio.svg">
        <img src="https://david-dm.org/PlutonusDev/Trio.svg">
        <br />
        <a href="https://nodei.co/npm/discord.js-trio/"><img src="https://nodei.co/npm/discord.js-trio.png?compact=true"></a>
    </p>
</div>

[Guide](https://plutonusdev.github.io/Trio/#/guide)
[Getting Started](https://plutonusdev.github.io/Trio/#/)

## About
As someone that makes Discord bots on a regular basis, I've found it fairly tedious to have to write out the 'boilerplate' code to get one up and running.
To circumvent this, I've decided to create Trio, a [Node.JS](https://nodejs.org) package working as a framework, using the powerful [Discord.JS](https://github.com/discordjs/discord.js) library as a backbone.

As a result of using Discord.JS, we have the following going for us:
- Common and understandable syntax and function names,
- Amazing performance,
- Predictable abstractions, and
- 100% coverage of the Discord API

## Installation
**Node.js 10.0.0 or newer is required.**  
Ignore any warnings about unmet peer dependencies, as they're all optional.

### Voice Support
For voice support, install ([node-opus](https://www.npmjs.com/package/node-opus)): `npm install node-opus`

### Optional packages
- [zlib-sync](https://www.npmjs.com/package/zlib-sync) for faster WebSocket data inflation (`npm install zlib-sync`)
- [zucc](https://www.npmjs.com/package/zucc) for significantly faster WebSocket data inflation (`npm install zucc`)
- [erlpack](https://github.com/discordapp/erlpack) for significantly faster WebSocket data (de)serialisation (`npm install discordapp/erlpack`)
- One of the following packages can be installed for faster voice packet encryption and decryption:
    - [sodium](https://www.npmjs.com/package/sodium) (`npm install sodium`)
    - [libsodium.js](https://www.npmjs.com/package/libsodium-wrappers) (`npm install libsodium-wrappers`)
- [uws](https://www.npmjs.com/package/@discordjs/uws) for a much faster WebSocket connection (`npm install @discordjs/uws`)
- [bufferutil](https://www.npmjs.com/package/bufferutil) for a much faster WebSocket connection when *not* using uws (`npm install bufferutil`)

## Example usage
```js
const Trio = require("discord.js-trio");
const config = {
    prefix: "!",
    token: "your-bot-token"
};

const Client = new Trio.Client(config);

Client.login(config.token);
```

## Links
* [Trio @ GitHub](https://github.com/PlutonusDev/Trio)
* [Trio @ NPM](https://www.npmjs.com/package/discord.js-trio)
* [Discord.JS Website](https://discord.js.org/) ([source](https://github.com/discordjs/website))
* [Discord.JS @ GitHub](https://github.com/discordjs/discord.js)
* [Discord.JS @ Discord](https://discord.gg/bRCvFy9)
* [Discord API @ Discord](https://discord.gg/discord-api)
* [Related Libraries](https://discordapi.com/unofficial/libs.html)

## Help and Support
If you don't understand something in the documentation, you are experiencing problems, or you just need a gentle
nudge in the right direction, please don't hesitate to contact me on Discord @ **Plutonus#0001**.

Please understand that this project is not affiliated with Discord.JS, and you should not contact them for help in regards to Trio!