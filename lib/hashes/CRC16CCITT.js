var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '3d08'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push("CRC16CCITT");
    } 
    return res;
}