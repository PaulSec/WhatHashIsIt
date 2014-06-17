var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '9bb2fb57063821c762cc009f7584ddae9da431ff'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
       res.push("MySQL5");
    } 
    return res;
}