var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '06e4af76833da7cc138d90602ef80070'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push("md5sha1md5sha1pass");
    } 
    return res;
}