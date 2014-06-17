var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '08bbef4754d98806c373f2cd7d9a43c4'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
      res.push("MD2");
    } 
    return res;
}