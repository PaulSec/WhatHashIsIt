var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = 'f10de2518a9f7aed5cf09b455112114d18487f0c894e349c3c76a681'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push("Haval224HMAC");
    } 
    return res;
}