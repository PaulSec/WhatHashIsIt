var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '35d1c0d69a2df62be2df13b087343dc9:BeKMviAfcXeTPTlX'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && !utils.isAlphaNumeric(hash) && hash[32] == ':') {
        res.push("MD5passsaltjoomla1");
    } 
    return res;
}