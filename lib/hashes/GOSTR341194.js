var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = 'ab709d384cce5fda0793becd3da0cb6a926c86a8f3460efb471adddee1c63793'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push("GOSTR341194");
    } 
    return res;
}