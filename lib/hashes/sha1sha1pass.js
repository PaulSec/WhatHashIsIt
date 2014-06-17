var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '3109b810188fcde0900f9907d2ebcaa10277d10e'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push("sha1sha1pass");
    } 
    return res;
}