var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '43227322be1b8d743e004c628e0042184f1288f27c13155412f08beeee0e54bf'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push("RipeMD256HMAC");
    } 
    return res;
}