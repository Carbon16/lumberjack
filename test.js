const { lumberjack } = require("./index");

var lumber = new lumberjack("w", "w", "LOG", true);
lumber.log("hello");
lumber.log("hello", "FATAL");
lumber.info("hello");
lumber.warn("hello");
lumber.error("hello");
lumber.debug("hello");
lumber.critical("hello");
lumber.fatal("hello");