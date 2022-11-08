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
            throw("You must define the log directory!")
        }
        this.dir = path;
        this.name = logName;
        this.include = include;
        this.verbose = verbose;
        if (!fs.existsSync(this.dir)) {
            fs.mkdirSync(this.dir, { recursive: true });
        }
    }
    log(message, level = "LOG", filename = "", comment = "") {
        var path = this.dir + "/river.log"
        var dt = new Date().toISOString();
        var entry = {
            "level": level,
            "message": message,
            "comment": comment,
            "path": filename,
            "time": dt
        };
        var message = dt + ' ' + level + ": " + message + " " + filename + ' ' + comment + "\r\n";
        if (this.verbose) {
            // console.log(entry)
            // console.log(this.river)
            console.log(message);
        }
        fs.appendFile(path, message, function (err) {
            if (err) throw err;
        });
        switch (level) {
            case "INFO":
                this.info.push(entry);
                break;
            case "DEBUG":
                this.debug.push(entry);
                break;
            case "WARN":
                this.warn.push(entry);
                break;
            case "ERROR":
                this.error.push(entry);
                break;
            case "CRITICAL":
                this.critical.push(entry);
                break;
            case "FATAL":
                this.fatal.push(entry);
                break;
        };
        this.river.push(entry);
        if (this.include.includes(level)) {
            var path = this.dir + "/" + this.name + "/" + level + ".log"
            fs.appendFile(path, message, function (err) {
                if (err) throw err;
            });
        };
    };
    info(message, filename = "", comment = "") {
        level = "INFO"
        var dt = new Date().toISOString();
        var entry = {
            "level": level,
            "message": message,
            "comment": comment,
            "path": filename,
            "time": dt
        };
        var message = dt + ' ' + level + ": " + message + " " + filename + ' ' + comment + "\r\n";
        if (this.verbose) {
            console.log(message);
        }
        this.info.push(entry);
        this.river.push(entry);
        var path = this.dir + "/" + this.name + "/" + "INFO.log"
        fs.appendFile(path, message, function (err) {
            if (err) throw err;
        });
        var path = this.dir + "/" + this.name + "/river.log"
        fs.appendFile(path, message, function (err) {
            if (err) throw err;
        })
    };
    debug(message, filename = "", comment = "") {
        level = "DEBUG"
        var dt = new Date().toISOString();
        var entry = {
            "level": level,
            "message": message,
            "comment": comment,
            "path": filename,
            "time": dt
        };
        var message = dt + ' ' + level + ": " + message + " " + filename + ' ' + comment + "\r\n";
        if (this.verbose) {
            console.log(message);
        }
        this.debug.push(entry);
        this.river.push(entry);
        var path = this.dir + "/" + this.name + "/" + "DEBUG.log"
        fs.appendFile(path, message, function (err) {
            if (err) throw err;
        });
        writeRiver(this.dir, message);
    };
    warn(message, filename = "", comment = "") {
        level = "WARN"
        var dt = new Date().toISOString();
        var entry = {
            "level": level,
            "message": message,
            "comment": comment,
            "path": filename,
            "time": dt
        };
        var message = dt + ' ' + level + ": " + message + " " + filename + ' ' + comment + "\r\n";
        if (this.verbose) {
            console.log(message);
        }
        this.warn.push(entry);
        this.river.push(entry);
        var path = this.dir + "/" + this.name + "/" + "WARN.log"
        fs.appendFile(path, message, function (err) {
            if (err) throw err;
        });
        writeRiver(this.dir, message);
    };
    error(message, filename = "", comment = "") {
        level = "ERROR"
        var dt = new Date().toISOString();
        var entry = {
            "level": level,
            "message": message,
            "comment": comment,
            "path": filename,
            "time": dt
        };
        var message = dt + ' ' + level + ": " + message + " " + filename + ' ' + comment + "\r\n";
        if (this.verbose) {
            console.log(message);
        }
        this.error.push(entry);
        this.river.push(entry);
        var path = this.dir + "/" + this.name + "/" + "ERROR.log"
        fs.appendFile(path, message, function (err) {
            if (err) throw err;
        });
        writeRiver(this.dir, message);
    };
    critical(message, filename = "", comment = "") {
        level = "CRITICAL"
        var dt = new Date().toISOString();
        var entry = {
            "level": level,
            "message": message,
            "comment": comment,
            "path": filename,
            "time": dt
        };
        var message = dt + ' ' + level + ": " + message + " " + filename + ' ' + comment + "\r\n";
        if (this.verbose) {
            console.log(message);
        }
        this.critical.push(entry);
        this.river.push(entry);
        var path = this.dir + "/" + this.name + "/" + "CRITICAL.log"
        fs.appendFile(path, message, function (err) {
            if (err) throw err;
        });
        writeRiver(this.dir, message);
    };
    fatal(message, filename = "", comment = "") {
        level = "FATAL"
        var dt = new Date().toISOString();
        var entry = {
            "level": level,
            "message": message,
            "comment": comment,
            "path": filename,
            "time": dt
        };
        var message = dt + ' ' + level + ": " + message + " " + filename + ' ' + comment + "\r\n";
        if (this.verbose) {
            console.log(message);
        }
        this.fatal.push(entry);
        this.river.push(entry);
        var path = this.dir + "/" + this.name + "/" + "FATAL.log"
        fs.appendFile(path, message, function (err) {
            if (err) throw err;
        });
        writeRiver(this.dir, message);
    };
};

exports.lumberjack = lumberjack;