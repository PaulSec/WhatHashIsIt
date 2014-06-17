var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '6aa856a2cfd349fb4ee781749d2d92a1ba2d38866e337a4a1db907654d4d4d7a'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push("Haval256HMAC");
    } 
    return res;
}