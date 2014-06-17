var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = 'cb4ebaaedfd536d965c452d9569a6b1e'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push("md5sha1pass");
    } 
    return res;
}