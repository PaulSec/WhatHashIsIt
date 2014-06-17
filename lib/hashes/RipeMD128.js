var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '4985351cd74aff0abc5a75a0c8a54115'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
      res.push("RipeMD128");
    }
    return res;
}