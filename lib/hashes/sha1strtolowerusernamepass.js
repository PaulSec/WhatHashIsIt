var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '79f575543061e158c2da3799f999eb7c95261f07'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push("sha1strtolowerusernamepass");
    } 
    return res;
}