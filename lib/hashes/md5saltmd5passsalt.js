var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = 'de0237dc03a8efdf6552fbe7788b2fdd'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push("md5saltmd5passsalt");
    } 
    return res;
}