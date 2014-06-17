var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '$1$cTuJH0Ju$1J8rI.mJReeMvpKUZbSlY/'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && !utils.isAlphaNumeric(hash) && hash.indexOf('$1$') >= 0) {
       res.push("MD5Unix");
    } 
    return res;
}