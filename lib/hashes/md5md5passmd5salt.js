var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '8dc71ef37197b2edba02d48c30217b32'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push("md5md5passmd5salt");
    } 
    return res;
}