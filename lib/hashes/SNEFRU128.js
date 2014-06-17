var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '4fb58702b617ac4f7ca87ec77b93da8a'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
      res.push("SNEFRU128");
    }
    return res;
}