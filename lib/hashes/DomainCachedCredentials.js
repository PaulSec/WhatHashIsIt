var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = 'f42005ec1afe77967cbc83dce1b4d714'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
      res.push("DomainCachedCredentials");
    } 
    return res;
}