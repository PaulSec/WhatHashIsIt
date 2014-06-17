var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = 'b33fd057'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push("CRC32");
    } 
    return res;
}