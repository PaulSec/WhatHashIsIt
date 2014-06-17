var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '4607';
    if (hash.length == hs.length && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push("CRC16");
    } 
    return res;
}