const { lumberjack } = require("./index");

var lumber = new lumberjack("w.log", "w", "LOG", true)
lumber.log("hello")