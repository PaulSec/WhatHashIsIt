var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '954ac5505fd1843bbb97d1b2cda0b98f'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push("md5usernamemd5passsalt");
    } 
    return res;
}