var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '39b4d8ecf70534e2fd86bb04a877d01dbf9387e640366029'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push("Haval192HMAC");
    } 
    return res;
}