var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = 'sha256$Zion3R$9e1a08aa28a22dfff722fad7517bae68a55444bb5e2f909d340767cec9acf2c3'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && !utils.isAlphaNumeric(hash) && hash.indexOf('sha256') >= 0) {
        res.push("SHA256Django");
    } 
    return res;
}