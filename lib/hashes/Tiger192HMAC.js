var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '8e914bb64353d4d29ab680e693272d0bd38023afa3943a41'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push("Tiger192HMAC");
    } 
    return res;
}