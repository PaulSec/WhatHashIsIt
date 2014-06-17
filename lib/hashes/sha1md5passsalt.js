var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '1dad2b71432d83312e61d25aeb627593295bcc9a'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push("sha1md5passsalt");
    } 
    return res;
}