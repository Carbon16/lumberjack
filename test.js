const { lumberjack } = require("./index");
var fs = require('fs');

console.log("INITIALISING TEST")
try {
    var lumber = new lumberjack("name", "path", "LOG", true);
    lumber.log("Sucess!");
    lumber.log("Sucess!", "FATAL");
    lumber.info("Sucess!");
    lumber.warn("Sucess!");
    lumber.error("Sucess!");
    lumber.debug("Sucess!");
    lumber.critical("Sucess!");
    lumber.fatal("Sucess!");
    fs.rmSync("./path", { recursive: true, force: true });
} catch(err) {
    console.error("TEST FAILED")
    console.error(err)
} finally {
    console.log("!!TEST SUCESS!!")
};