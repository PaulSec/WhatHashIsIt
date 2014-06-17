var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = 'cc600a2903130c945aa178396910135cc7f93c63'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push("sha1saltsha1saltsha1pass");
    } 
    return res;
}