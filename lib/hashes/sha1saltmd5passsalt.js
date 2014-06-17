var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '6716d047c98c25a9c2cc54ee6134c73e6315a0ff'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push("sha1saltmd5passsalt");
    } 
    return res;
}