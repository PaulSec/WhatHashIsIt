var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '00025111b3c4d0ac1635558ce2393f77e94770c5'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push("sha1usernamepasssalt");
    } 
    return res;
}