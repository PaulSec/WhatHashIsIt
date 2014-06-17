var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = 'a2acde400e61410e79dacbdfc3413151'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
      res.push("MD4");
    } 
    return res;
}