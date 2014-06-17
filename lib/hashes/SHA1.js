var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '4a1d4dbc1e193ec3ab2e9213876ceb8f4db72333'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
       res.push("SHA1");
    } 
    return res;
}