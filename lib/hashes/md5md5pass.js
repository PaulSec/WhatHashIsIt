var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = 'a96103d267d024583d5565436e52dfb3'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push("md5md5pass");
    }
    return res;
}