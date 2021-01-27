const _ = require('lodash');
const toArabic = require('./generative');

test('generative', () => {
    _.transform({
        'I': 1,
        'II': 2,
        'III': 3,
        'IV': 4,
        'V': 5,
        'VI': 6,
        'VII': 7,
        'VIII': 8,
        'IX': 9,
        'X': 10
    }, function (test, arabic, roman) {
        test['Roman numeral: ' + roman + ' => ' + arabic] = function () {
            const result = toArabic(roman);

            expect(arabic).toEqual(result)
        }
    })
});
