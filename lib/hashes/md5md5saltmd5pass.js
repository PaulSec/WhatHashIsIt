var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '8966f37dbb4aca377a71a9d3d09cd1ac'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push("md5md5saltmd5pass");
    } 
    return res;
}