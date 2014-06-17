var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '$apr1$qAUKoKlG$3LuCncByN76eLxZAh/Ldr1'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && hash.indexOf('$apr') >= 0) {
       res.push("MD5APR");
    } 
    return res;
}