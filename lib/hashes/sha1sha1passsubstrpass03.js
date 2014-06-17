var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '5ed6bc680b59c580db4a38df307bd4621759324e'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push("sha1sha1passsubstrpass03");
    } 
    return res;
}