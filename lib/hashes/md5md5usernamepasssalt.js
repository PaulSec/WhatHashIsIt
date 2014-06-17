var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '4319a3befce729b34c3105dbc29d0c40'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push("md5md5usernamepasssalt");
    } 
    return res;
}