var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '3f47886719268dfa83468630948228f6'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
      res.push("MD5HMACWordpress");
    }
    return res;
}