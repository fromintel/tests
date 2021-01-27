const codePricing = (actual, code) => {
    // See: smells/unclear/chafing.js
    const expected = code.charCodeAt(0) * Math.round((1000 - (code.length * 39)) / 42)
    expect(expected).toEqual(actual);
}

const generateCode = {
    one: function () {
        return '784'
    },
    two: function () {
        return '(8xj)'
    },
    three: function () {
        return 'AAAABCDE'
    }
}

module.exports = { codePricing, generateCode };
