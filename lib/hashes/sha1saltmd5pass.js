var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '860465ede0625deebb4fbbedcb0db9dc65faec30'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push("sha1saltmd5pass");
    } 
    return res;
}