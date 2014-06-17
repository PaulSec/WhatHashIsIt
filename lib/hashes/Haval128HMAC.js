var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '3ce8b0ffd75bc240fc7d967729cd6637'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
      res.push("Haval128HMAC");
    } 
    return res;
}