var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '4548d2c062933dff53928fd4ae427fc0'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push("md5md5md5md5md5pass");
    } 
    return res;
}