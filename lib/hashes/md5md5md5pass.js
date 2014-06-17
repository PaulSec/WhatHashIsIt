var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = 'ea086739755920e732d0f4d8c1b6ad8d'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push("md5md5md5pass");
    } 
    return res;
}