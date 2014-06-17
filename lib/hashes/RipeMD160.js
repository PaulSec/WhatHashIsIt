var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = 'dc65552812c66997ea7320ddfb51f5625d74721b'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
       res.push("RipeMD160");
    } 
    return res;
}