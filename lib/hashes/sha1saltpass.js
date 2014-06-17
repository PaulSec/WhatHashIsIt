var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '299c3d65a0dcab1fc38421783d64d0ecf4113448'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push("sha1saltpass");
    } 
    return res;
}