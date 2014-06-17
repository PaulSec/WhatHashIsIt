var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = 'cd3a90a3bebd3fa6b6797eba5dab8441f16a7dfa96c6e641'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push("Haval192");
    } 
    return res;
}