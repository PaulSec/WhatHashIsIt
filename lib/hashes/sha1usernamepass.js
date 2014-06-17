var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '3de3d8093bf04b8eb5f595bc2da3f37358522c9f'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push("sha1usernamepass");
    } 
    return res;
}