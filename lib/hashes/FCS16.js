var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '0e5b'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push('FCS16')
    }
    return res;
}



