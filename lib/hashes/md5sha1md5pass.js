var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '099b8a59795e07c334a696a10c0ebce0'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push("md5sha1md5pass");
    } 
    return res;
}