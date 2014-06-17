var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = 'c086184486ec6388ff81ec9f23528727'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
      res.push("Tiger128");
    }
    return res;
}