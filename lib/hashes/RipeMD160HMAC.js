var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = 'ca28af47653b4f21e96c1235984cb50229331359'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
       res.push("RipeMD160HMAC");
    } 
    return res;
}