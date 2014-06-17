var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '780d43fa11693b61875321b6b54905ee488d7760'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push("sha1sha1passsalt");
    } 
    return res;
}