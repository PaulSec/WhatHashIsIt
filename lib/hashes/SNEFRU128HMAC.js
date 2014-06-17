var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '59b2b9dcc7a9a7d089cecf1b83520350'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
      res.push("SNEFRU128HMAC");
    }
    return res;
}