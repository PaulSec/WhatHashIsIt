var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '4b61b72ead2b0eb0fa3b8a56556a6dca'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
      res.push("MD2HMAC");
    } 
    return res;
}
