var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = 'f006a1863663c21c541c8d600355abfeeaadb5e4'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push("sha1passsalt");
    } 
    return res;
}