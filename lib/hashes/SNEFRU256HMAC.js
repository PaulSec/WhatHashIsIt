var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '4e9418436e301a488f675c9508a2d518d8f8f99e966136f2dd7e308b194d74f9'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push("SNEFRU256HMAC");
    } 
    return res;
}