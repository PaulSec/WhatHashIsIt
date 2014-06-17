var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '58714327f9407097c64032a2fd5bff3a260cb85f'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push("sha1saltsha1pass");
    } 
    return res;
}