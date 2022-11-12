"use strict";
var fs = require('fs');
//function to start express server


function writeRiver(riverDir, message) {
    var path = riverDir +"/river.log"
    fs.appendFile(path, message, function (err) {
        if (err) throw err;
    })
};

class lumberjack {
    river = new Array()
    infoRiver = new Array()
    debugRiver = new Array()
    warnRiver = new Array()
    errorRiver = new Array()
    criticalRiver = new Array()
    fatalRiver = new Array()

    constructor(logName = "log", path = null, include = "LOG", verbose = false) {
        if (path == undefined || path == null) {
            throw("You must define the log directory!")
        }
        this.dir = path;
        this.name = logName;
        this.include = include;
        this.verbose = verbose;
        if (!fs.existsSync((this.dir))) {
            fs.mkdirSync(this.dir, { recursive: true });
        }
    };

    log(message, level = "INFO", filename = "", comment = "") {
        var path = this.dir + "/river.log"
        var dt = new Date().toISOString();
        var entry = {
            "level": level,
            "message": message,
            "comment": comment,
            "path": filename,
            "time": dt
        };
        var message = dt + '   ' + this.name + '   ' + level + ":      " + message + "   " + filename + '     ' + comment + "\r\n";
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
                this.infoRiver.push(entry);
                break;
            case "DEBUG":
                this.debugRiver.push(entry);
                break;
            case "WARN":
                this.warnRiver.push(entry);
                break;
            case "ERROR":
                this.errorRiver.push(entry);
                break;
            case "CRITICAL":
                this.criticalRiver.push(entry);
                break;
            case "FATAL":
                this.fatalRiver.push(entry);
                break;
        };
        this.river.push(entry);
        //save file
        var path = this.dir + "/" + level + ".log"
        fs.appendFile(path, message, function (err) {
            if (err) throw err;
        });
    };

    info(message, filename = "", comment = "") {
        var path = this.dir + "/INFO.log"
        var level = "INFO"
        var dt = new Date().toISOString();
        var entry = {
            "level": level,
            "message": message,
            "comment": comment,
            "path": filename,
            "time": dt
        };
        var message = dt + '   ' + this.name + '   ' + level + ":      " + message + "   " + filename + '     ' + comment + "\r\n";
        if (this.verbose) {
            console.log(message);
        }
        this.infoRiver.push(entry);
        this.river.push(entry);
        fs.appendFile(path, message, function (err) {
            if (err) throw err;
        });
        writeRiver(this.dir, message);
    };

    debug(message, filename = "", comment = "") {
        var level = "DEBUG"
        var dt = new Date().toISOString();
        var entry = {
            "level": level,
            "message": message,
            "comment": comment,
            "path": filename,
            "time": dt
        };
        var message = dt + '   ' + this.name + '   ' + level + ":      " + message + "   " + filename + '     ' + comment + "\r\n";
        if (this.verbose) {
            console.log(message);
        }
        this.debugRiver.push(entry);
        this.river.push(entry);
        var path = this.dir + "/" + "DEBUG.log"
        fs.appendFile(path, message, function (err) {
            if (err) throw err;
        });
        writeRiver(this.dir, message);
    };
    warn(message, filename = "", comment = "") {
        var level = "WARN"
        var dt = new Date().toISOString();
        var entry = {
            "level": level,
            "message": message,
            "comment": comment,
            "path": filename,
            "time": dt
        };
        var message = dt + '   ' + this.name + '   ' + level + ":      " + message + "   " + filename + '     ' + comment + "\r\n";
        if (this.verbose) {
            console.log(message);
        }
        this.warnRiver.push(entry);
        this.river.push(entry);
        var path = this.dir + "/" + "WARN.log"
        fs.appendFile(path, message, function (err) {
            if (err) throw err;
        });
        writeRiver(this.dir, message);
    };
    error(message, filename = "", comment = "") {
        var level = "ERROR"
        var dt = new Date().toISOString();
        var entry = {
            "level": level,
            "message": message,
            "comment": comment,
            "path": filename,
            "time": dt
        };
        var message = dt + '   ' + this.name + '   ' + level + ":      " + message + "   " + filename + '     ' + comment + "\r\n";
        if (this.verbose) {
            console.log(message);
        }
        this.errorRiver.push(entry);
        this.river.push(entry);
        var path = this.dir + "/"  + "ERROR.log"
        fs.appendFile(path, message, function (err) {
            if (err) throw err;
        });
        writeRiver(this.dir, message);
    };
    critical(message, filename = "", comment = "") {
        var level = "CRITICAL"
        var dt = new Date().toISOString();
        var entry = {
            "level": level,
            "message": message,
            "comment": comment,
            "path": filename,
            "time": dt
        };
        var message = dt + '   ' + this.name + '   ' + level + ":      " + message + "   " + filename + '     ' + comment + "\r\n";
        if (this.verbose) {
            console.log(message);
        }
        this.criticalRiver.push(entry);
        this.river.push(entry);
        var path = this.dir + "/"  + "CRITICAL.log"
        fs.appendFile(path, message, function (err) {
            if (err) throw err;
        });
        writeRiver(this.dir, message);
    };
    fatal(message, filename = "", comment = "") {
        var level = "FATAL"
        var dt = new Date().toISOString();
        var entry = {
            "level": level,
            "message": message,
            "comment": comment,
            "path": filename,
            "time": dt
        };
        var message = dt + '   ' + this.name + '   ' + level + ":      " + message + "   " + filename + '     ' + comment + "\r\n";
        if (this.verbose) {
            console.log(message);
        }
        this.fatalRiver.push(entry);
        this.river.push(entry);
        var path = this.dir + "/"  + "FATAL.log"
        fs.appendFile(path, message, function (err) {
            if (err) throw err;
        });
        writeRiver(this.dir, message);
    };
    thicc(path = this.dir) {
        //dump the whole object as json
        var path = path + "/" + this.name + ".json"
        fs.writeFile(path, JSON.stringify(this), function (err) {
            if (err) throw err;
        });
    };
    startServer(port = 3000) {
        const express = require('express')
        const app = express()
        app.get('/', (req, res) => {
            res.send(this)
        });
        app.get('/river', (req, res) => {
            res.send(this.river)
        });
        app.get('/info', (req, res) => {
            res.send(this.infoRiver)
        });
        app.get('/debug', (req, res) => {
            res.send(this.debugRiver)
        });
        app.get('/warn', (req, res) => {
            res.send(this.warnRiver)
        });
        app.get('/error', (req, res) => {
            res.send(this.errorRiver)
        });
        app.get('/critical', (req, res) => {
            res.send(this.criticalRiver)
        });
        app.get('/fatal', (req, res) => {
            res.send(this.fatalRiver)
        });
        app.listen(port, () => {
            console.log(`Listening @ http://localhost:${port}`)
        });
    }
};

exports.lumberjack = lumberjack;