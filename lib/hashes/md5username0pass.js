var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = 'e44a60f8f2106492ae16581c91edb3ba'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push("md5username0pass");
    } 
    return res;
}