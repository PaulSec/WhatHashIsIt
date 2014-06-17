var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = 'b419557099cfa18a86d1d693e2b3b3e979e7a5aba361d9c4ec585a1a70c7bde4'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push("SHA256md5pass");
    } 
    return res;
}