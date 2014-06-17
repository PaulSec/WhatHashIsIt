var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '5634cc3b922578434d6e9342ff5913f7'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
      res.push("md5passsalt");
    }
    return res;
}