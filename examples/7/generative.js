const _ = require('lodash');

function toArabic (roman) {
    return _(roman).map(function (x, i) {
        const nextX = roman[i + 1]
        if (x === 'I') {
            return _.includes(['V', 'X'], nextX) ? -1 : 1
        } else if (x === 'V') {
            return nextX === 'X' ? -5 : 5
        } else if (x === 'X') {
            return nextX === 'C' ? -10 : 10
        }
    }).reduce(function (memo, x) { return memo + x })
}

module.exports = toArabic;
