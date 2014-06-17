var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '0000003f'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push("XOR32");
    } 
    return res;
}