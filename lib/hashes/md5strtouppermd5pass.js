var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '519de146f1a658ab5e5e2aa9b7d2eec8'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push("md5strtouppermd5pass");
    } 
    return res;
}