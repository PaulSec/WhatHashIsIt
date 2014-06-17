var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '4318B176C3D8E3DEAAD3B435B51404EE:B7C899154197E8A2A33121D76A240AB5'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && !utils.isAlphaNumeric(hash) && hash[32] == ':') {
        res.push("SAM");
    } 
    return res;
}