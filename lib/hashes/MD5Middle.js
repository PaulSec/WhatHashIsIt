var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '7ec92c7c98de3fac'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
      res.push("MD5Middle");
    } 
    return res;
}
