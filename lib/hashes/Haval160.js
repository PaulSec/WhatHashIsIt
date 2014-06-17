var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = 'a106e921284dd69dad06192a4411ec32fce83dbb'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
       res.push("Haval160");
    } 
    return res;
}