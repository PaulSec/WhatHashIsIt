var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = 'f65d3c0ef6c56f4c74ea884815414c24dbf0195635b550f47eac651a'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push("Haval224");
    } 
    return res;
}