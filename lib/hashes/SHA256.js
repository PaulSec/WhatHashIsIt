var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '2c740d20dab7f14ec30510a11f8fd78b82bc3a711abe8a993acdb323e78e6d5e'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push("SHA256");
    } 
    return res;
}