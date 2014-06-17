var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '6f5daac3fee96ba1382a09b1ba326ca73dccf9e7'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
       res.push("SHA1HMAC");
    } 
    return res;
}