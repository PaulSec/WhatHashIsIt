var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = 'fa960056c0dea57de94776d3759fb555a15cae87'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push("sha1md5pass");
    } 
    return res;
}