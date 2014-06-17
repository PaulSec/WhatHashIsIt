var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = '5fcbe06df20ce8ee16e92542e591bdea706fbdc2442aecbf42c223f4461a12af'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash) && utils.isAlphaNumeric(hash)) {
        res.push("RipeMD256");
    } 
    return res;
}