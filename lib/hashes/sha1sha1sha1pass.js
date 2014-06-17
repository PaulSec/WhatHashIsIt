var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '3328ee2a3b4bf41805bd6aab8e894a992fa91549'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push("sha1sha1sha1pass");
    } 
    return res;
}