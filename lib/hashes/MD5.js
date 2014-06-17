var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = 'ae11fd697ec92c7c98de3fac23aba525'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
      res.push("MD5");
    }
    return res;
}
