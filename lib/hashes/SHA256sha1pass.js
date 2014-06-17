var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = 'afbed6e0c79338dbfe0000efe6b8e74e3b7121fe73c383ae22f5b505cb39c886'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push("SHA256sha1pass");
    } 
    return res;
}