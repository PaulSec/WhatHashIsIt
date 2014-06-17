var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = 'cc348bace876ea440a28ddaeb9fd3550'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
      res.push("NTLM");
    }
    return res;
}