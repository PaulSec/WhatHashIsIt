var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '7169ecae19a5cd729f6e9574228b8b3c91699175324e6222dec569d4281d4a4a'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push("Haval256");
    } 
    return res;
}