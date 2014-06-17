var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = 'd57e43d2c7e397bf788f66541d6fdef9'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
      res.push("MD5HMAc");
    }
    return res;
}