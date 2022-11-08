"use strict";
var fs = require('fs');
const { exit } = require('process');

class lumberjack {
    river = new Array()
    info = new Array()
    debug = new Array()
    warn = new Array()
    error = new Array()
    critical = new Array()
    fatal = new Array()
    constructor(logName = "log", path = null, include = "LOG", verbose = false) {
        if (path == undefined || path == null) {
            throw("You must define the log path!")
        }
        this.path = path;
        this.name = logName;
        this.include = include;
        this.verbose = verbose;
    }
    log(message, level = "LOG", filename = "", comment = "") {
        var dt = new Date().toISOString()
        var entry = {
            "level": level,
            "message": message,
            "comment": comment,
            "path": filename,
            "time": dt
        }
        this.river.push(entry)
        var message = dt + ' ' + level + ": " + message + " " + filename + ' ' + comment + "\r\n"
        if (this.verbose) {
            // console.log(entry)
            // console.log(this.river)
            console.log(message);
        }
        fs.appendFile(this.path, message, function (err) {
            if (err) throw err;
        });
    }
};

exports.lumberjack = lumberjack;