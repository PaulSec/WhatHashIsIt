var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = 'ae1995b931cf4cbcf1ac6fbf1a83d1d3'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
      res.push("RipeMD128HMAC");
    }
    return res;
}