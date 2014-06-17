var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = 'd6e3ec49aa0f138a619f27609022df10'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
      res.push("Haval128");
    } 
    return res;
}
