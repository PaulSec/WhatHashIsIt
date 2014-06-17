var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '469e9cdcaff745460595a7a386c4db0c'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
      res.push("md5saltpasssalt");
    }
    return res;
}