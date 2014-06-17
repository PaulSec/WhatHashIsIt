var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '654741780db415732eaee12b1b909119'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push("md5usernameLFpass");
    } 
    return res;
}