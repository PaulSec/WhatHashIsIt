var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '0x49a57f66bd3d5ba6abda5579c264a0e4'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash) && hash.indexOf('0x') >= 0) {
         res.push("LineageIIC4");
    } 
    return res;
}