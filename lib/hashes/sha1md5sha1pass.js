var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '8bceaeed74c17571c15cdb9494e992db3c263695'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push("sha1md5sha1pass");
    } 
    return res;
}