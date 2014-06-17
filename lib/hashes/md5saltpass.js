var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '22cc5ce1a1ef747cd3fa06106c148dfa'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
      res.push("md5saltpass");
    }
    return res;
}