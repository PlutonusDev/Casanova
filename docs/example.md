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