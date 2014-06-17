var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '9032fabd905e273b9ceb1e124631bd67'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push("md5md5saltpass");
    } 
    return res;
}