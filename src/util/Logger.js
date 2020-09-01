let chalk, moment;

try {
	chalk = require("chalk");
} catch (_) {
	chalk = null;
}
try {
	moment = require("moment");
} catch (_) {
	moment = null;
}

exports.log = (content, type = "okay") => {
	const timestamp = `[${moment ? moment().format("YYYY-MM-DD HH:mm:ss") : ""}]`;
	switch (type) {
	case "okay": {
		return console.log(`${chalk ? chalk.bgBlue(` ${timestamp} `) : ` ${timestamp} `} ${chalk ? chalk.black.bgGreen(` ${type.toUpperCase()} `) : ` ${type.toUpperCase()} `} ${content} `);
	}
	case "warn": {
		return console.log(`${chalk ? chalk.bgBlue(` ${timestamp} `) : ` ${timestamp} `} ${chalk ? chalk.black.bgYellow(` ${type.toUpperCase()} `) : ` ${type.toUpperCase()} `} ${content} `);
	}
	case "err!": {
		return console.log(`${chalk ? chalk.bgBlue(` ${timestamp} `) : ` ${timestamp} `} ${chalk ? chalk.bgRed(` ${type.toUpperCase()} `) : ` ${type.toUpperCase()} `} ${content} `);
	}
	case "exec": {
		return console.log(`${chalk ? chalk.bgBlue(` ${timestamp} `) : ` ${timestamp} `} ${chalk ? chalk.black.bgGreen(` ${type.toUpperCase()} `) : ` ${type.toUpperCase()} `} ${content} `);
	}
	default: throw new TypeError("Logger type must be either 'exec', default = 'okay', 'warn', or 'err!'.");
	}
};
