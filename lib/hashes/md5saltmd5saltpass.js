var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = 'd8f3b3f004d387086aae24326b575b23'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push("md5saltmd5saltpass");
    } 
    return res;
}