var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '80000000'
    if (hash.length == hs.length && utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push("GHash323");
    }
    return res;
}