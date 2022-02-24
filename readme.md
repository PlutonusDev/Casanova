<div align="center">
    <br />
    <p>
        <img src="https://i.vgy.me/k7WKgR.png">
        <br />
        <img src="https://img.shields.io/github/issues/PlutonusDev/Casanova.svg">
        <img src="https://img.shields.io/github/stars/PlutonusDev/Casanova.svg">
        <img src="https://img.shields.io/npm/dw/casanova.svg">
        <img src="https://img.shields.io/npm/l/casanova.svg">
        <img src="https://img.shields.io/github/last-commit/PlutonusDev/Casanova.svg">
        <img src="https://app.codacy.com/project/badge/Grade/7d860a846079469aa589d9d10ee70ef9">
        <br />
        <a href="https://nodei.co/npm/casanova/"><img src="https://nodei.co/npm/casanova.png?compact=true"></a>
    </p>
</div>

## Table of Contents

1.  [About](#about)
2.  [Installation](#installation)
    -  [+Voice Support](#voice-support)
    -  [+Optional Dependencies](#optional-dependencies)
3.  [Example Usage](#usage)
4.  [Links](#links)
5.  [Help and Support](#support)

[Guide](https://plutonusdev.github.io/Casanova/#/guide)
[Getting Started](https://plutonusdev.github.io/Casanova/#/)

<a name="about"></a>
## About
As someone that makes Discord bots on a regular basis, I've found it fairly tedious to have to write out the 'boilerplate' code to get one up and running.
To circumvent this, I've decided to create Casanova (formerly Trio), a [Node.JS](https://nodejs.org) package working as a framework, using the powerful [Discord.JS](https://github.com/discordjs/discord.js) library as a backbone.

As a result of using Discord.JS, we have the following going for us:
-  Common and understandable syntax and function names,
-  Amazing performance,
-  Predictable abstractions, and
-  100% coverage of the Discord API

On top of that, Casanova has been designed to:
- 

<a name="installation"></a>
## Installation
**Node.js 16.6.0 or newer is required.**  
Ignore any warnings about unmet peer dependencies, as they're all optional.

<a name="voice-support"></a>
### Voice Support
For voice support, install:
-  ([node-opus](https://www.npmjs.com/package/node-opus)): `npm install node-opus`
-  ([@discordjs/voice](https://github.com/discordjs/voice)): `npm install @discordjs/voice`

<a name="optional-dependencies"></a>
### Optional Dependencies
-  [zlib-sync](https://www.npmjs.com/package/zlib-sync) for faster WebSocket data inflation (`npm install zlib-sync`)
-  [zucc](https://www.npmjs.com/package/zucc) for significantly faster WebSocket data inflation (`npm install zucc`)
-  [erlpack](https://github.com/discordapp/erlpack) for significantly faster WebSocket data (de)serialisation (`npm install discordapp/erlpack`)
-  One of the following packages can be installed for faster voice packet encryption and decryption:
    -  [sodium](https://www.npmjs.com/package/sodium) (`npm install sodium`)
    -  [libsodium.js](https://www.npmjs.com/package/libsodium-wrappers) (`npm install libsodium-wrappers`)
-  [bufferutil](https://www.npmjs.com/package/bufferutil) for a much faster WebSocket connection (`npm install bufferutil`)
-  [utf-8-validate](https://www.npmjs.com/package/utf-8-validate) in combination with `bufferutil` for significantly faster WebSocket Processing

<a name="usage"></a>
## Example Usage
`app.js`
```js
const Casanova = require("casanova");
const Client = new Casanova.Client();
const config = require("./config");

Client.login(config.token);
```

`config.js`
```js
module.exports = {
	token: "NzTZ-Bot-Token-Here"
}
```

<a name="links"></a>
## Links
* [Trio @ GitHub](https://github.com/PlutonusDev/Casanova)
* [Trio @ NPM](https://www.npmjs.com/package/casanova)
* [Discord.JS Website](https://discord.js.org/) ([source](https://github.com/discordjs/website))
* [Discord.JS @ GitHub](https://github.com/discordjs/discord.js)
* [Discord.JS @ Discord](https://discord.gg/bRCvFy9)
* [Discord API @ Discord](https://discord.gg/discord-api)
* [Related Libraries](https://discordapi.com/unofficial/libs.html)

<a name="support"></a>
## Help and Support
If you don't understand something in the documentation, you are experiencing problems, or you just need a gentle
nudge in the right direction, please don't hesitate to contact me on Discord @ **Plutonus#0001**.

Please understand that this project is not affiliated with Discord.JS or Discord, and you should not contact them for help specifically in regards to Casanova!
