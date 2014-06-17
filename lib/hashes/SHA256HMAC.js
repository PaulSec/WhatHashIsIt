var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = 'd3dd251b7668b8b6c12e639c681e88f2c9b81105ef41caccb25fcde7673a1132'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push("SHA256HMAC");
    } 
    return res;
}