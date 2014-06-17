var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '9ae20f88189f6e3a62711608ddb6f5fd'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
      res.push("md5saltpassusername");
    }
    return res;
}