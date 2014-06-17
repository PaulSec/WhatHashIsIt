var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = 'ae11fd697ec92c7c'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
      res.push("MD5Half");
    } 
    return res;
}