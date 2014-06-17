var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '5848c73c2482d3c2c7b6af134ed8dd89'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push("md5md5passsalt");
    } 
    return res;
}