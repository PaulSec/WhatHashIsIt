var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = 'c15ff86a859892b5e95cdfd50af17d05268824a6c9caaa54e4bf1514'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push("SHA224HMAC");
    } 
    return res;
}