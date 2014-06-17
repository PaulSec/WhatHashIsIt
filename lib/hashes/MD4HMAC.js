var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '6be20b66f2211fe937294c1c95d1cd4f'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
      res.push("MD4HMAC");
    } 
    return res;
}