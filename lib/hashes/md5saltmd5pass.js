var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = 'aca2a052962b2564027ee62933d2382f'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
      res.push("md5saltmd5pass");
    }
    return res;
}