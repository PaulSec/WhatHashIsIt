var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '85318985'
    if (hash.length == hs.length && utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
       res.push("GHash325");
    } 
    return res;
}