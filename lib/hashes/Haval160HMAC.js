var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '29206f83edc1d6c3f680ff11276ec20642881243'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
       res.push("Haval160HMAC");
    } 
    return res;
}