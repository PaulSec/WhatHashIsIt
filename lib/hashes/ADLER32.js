var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '0607cb42'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push("ADLER32");
    } 
    return res;
}