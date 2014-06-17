var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '$H$9kyOtE8CDqMJ44yfn9PFz2E.L2oVzL1'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && !utils.isAlphaNumeric(hash) && hash.indexOf('$H$') >= 0) {
       res.push("MD5phpBB3");
    } 
    return res;
}