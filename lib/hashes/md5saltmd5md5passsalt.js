var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '81f181454e23319779b03d74d062b1a2'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push("md5saltmd5md5passsalt");
    } 
    return res;
}