var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = 'baea31c728cbf0cd548476aa687add4b'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
      res.push("RAdminv2x");
    }
    return res;
}