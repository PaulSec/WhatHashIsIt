var fs = require('fs');
var path = require("path");

exports.isANumber = function(str) {
    number = parseInt(str);
    return number.toString().length == str.length && !isNaN(number);
}

exports.isAlphaNumeric = function(str) {
    if(/^[a-z0-9]+$/i.test(str)) {
        return true;
    }
    return false;
}

exports.isAlpha = function(str) {
    if(/^[a-z]+$/i.test(str)) {
        return true;
    }
    return false;
}

exports.getAllModules = function(callback) {
    var modules = []
    var p = "./lib/hashes/"
    fs.readdir(p, function (err, files) {
        if (err) {
            throw err;
        }

        files.map(function (file) {
            return path.join(p, file);
        }).filter(function (file) {
            return fs.statSync(file).isFile();
        }).forEach(function (file) {
            // console.log("Loading module: %s", file);
            modules.push(file);
        });
        // console.log(modules);
	callback(modules);
    });
}
