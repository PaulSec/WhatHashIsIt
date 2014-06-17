var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = 'e301f414993d5ec2bd1d780688d37fe41512f8b57f6923d054ef8e59'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push("SHA224");
    } 
    return res;
}