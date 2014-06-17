var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '63cea4673fd25f46'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
      res.push("MySQL");
    } 
    return res;
}

