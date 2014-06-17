var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '70506bac605485b4143ca114cbd4a3580d76a413'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push("sha1sha1saltpass");
    } 
    return res;
}