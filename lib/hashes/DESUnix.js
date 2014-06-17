var utils = require('../utils.js');

exports.check = function(hash, res) {
    hs = 'ZiY8YtDKXJwYQ'
    if (hash.length == hs.length && !utils.isANumber(hash) && !utils.isAlpha(hash)) {
      res.push("DESUnix");
    } 
    return res;
}
