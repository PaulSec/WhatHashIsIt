var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '3a654de48e8d6b669258b2d33fe6fb179356083eed6ff67e27c5ebfa4d9732bb'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push("SNEFRU256");
    } 
    return res;
}