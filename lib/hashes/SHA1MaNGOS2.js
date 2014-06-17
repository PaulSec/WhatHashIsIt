var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '644a29679136e09d0bd99dfd9e8c5be84108b5fd'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push("SHA1MaNGOS2");
    } 
    return res;
}