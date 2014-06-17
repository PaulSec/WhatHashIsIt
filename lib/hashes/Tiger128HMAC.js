var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = 'c87032009e7c4b2ea27eb6f99723454b'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
      res.push("Tiger128HMAC");
    }
    return res;
}