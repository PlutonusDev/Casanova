const Trio = require("../trio");
const config = require("./data/config");
const wait = require("util").promisify(setTimeout);

const Client = new Trio.Client(config);
const { token } = config

Client.login(token);

wait(5000).then(() => {
    Client.destroy();
});