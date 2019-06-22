// Plutonus 22/06/19

const chalk = require("chalk");
const moment = require("moment");

exports.log = (content, type = "okay") => {
  const timestamp = `[${moment().format("YYYY-MM-DD HH:mm:ss")}]`;
  switch (type) {
    case "okay": {
      return console.log(`${chalk.bgBlue(" "+timestamp+" ")} ${chalk.black.bgGreen(" "+type.toUpperCase()+" ")} ${content} `);
    }
    case "warn": {
      return console.log(`${chalk.bgBlue(" "+timestamp+" ")} ${chalk.black.bgYellow(" "+type.toUpperCase()+" ")} ${content} `);
    }
    case "err!": {
      return console.log(`${chalk.bgBlue(" "+timestamp+" ")} ${chalk.bgRed(" "+type.toUpperCase()+" ")} ${content} `);
    }
    case "exec": {
      return console.log(`${chalk.bgBlue(" "+timestamp+" ")} ${chalk.black.bgGreen(" "+type.toUpperCase()+" ")} ${content} `);
    }
    default: throw new TypeError("Logger type must be either exec, okay, warn, or err!.");
  }
};