var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '$P$BiTOhOj3ukMgCci2juN0HRbCdDRqeh.'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && !utils.isAlphaNumeric(hash) && hash.indexOf('$P$') >= 0) {
       res.push("MD5Wordpress");
    } 
    return res;
}