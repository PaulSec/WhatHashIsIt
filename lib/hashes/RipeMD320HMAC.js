var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '244516688f8ad7dd625836c0d0bfc3a888854f7c0161f01de81351f61e98807dcd55b39ffe5d7a78'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push("RipeMD320HMAC");
    } 
    return res;
}