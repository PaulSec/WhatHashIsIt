var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '02528c1f2ed8ac7d83fe76f3cf1c133f'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push("md5md5md5md5pass");
    } 
    return res;
}