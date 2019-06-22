const Trio = require("../trio");
const config = require("./data/config");

const Client = new Trio.Client(config);
const { token } = config

Client.login(token);