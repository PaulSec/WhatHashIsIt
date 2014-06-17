var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = 'fb33e01e4f8787dc8beb93dac4107209:fxJUXVjYRafVauT77Cze8XwFrWaeAYB2'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && !utils.isAlphaNumeric(hash) && hash[32] == ':') {
        res.push("MD5passsaltjoomla2");
    } 
    return res;
}