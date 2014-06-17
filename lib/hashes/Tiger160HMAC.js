var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '6603161719da5e56e1866e4f61f79496334e6a10'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push("Tiger160HMAC");
    } 
    return res;
}