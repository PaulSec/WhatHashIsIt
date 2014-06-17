var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = 'a2c0cdb6d1ebd1b9f85c6e25e0f8732e88f02f96'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push("SHA1MaNGOS");
    } 
    return res;
}