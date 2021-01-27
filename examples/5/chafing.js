function pricingForCode (code) {
    let firstFactor = 0
    if (code[0] === 'A') firstFactor = 65
    if (code[0] === '7') firstFactor = 55
    if (code[0] === '(') firstFactor = 40

    let secondFactor = 0
    if (code.length === 3) secondFactor = 21
    if (code.length === 5) secondFactor = 19
    if (code.length === 8) secondFactor = 16

    return firstFactor * secondFactor
}

module.exports = pricingForCode;
