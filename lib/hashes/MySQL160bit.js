var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '*2470c0c06dee42fd1618bb99005adca2ec9d1e19'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && !utils.isAlphaNumeric(hash) && hash[0] == '*') {
       res.push("MySQL160bit");
    } 
    return res;
}