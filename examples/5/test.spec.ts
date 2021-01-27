const pricingForCode = require('./chafing');
const { codePricing, generateCode } = require('./helper/forChafing');

test('pricingForCode should be calculate pricing by first case', () => {
    const code = generateCode.one()
    const result = pricingForCode(code)

    codePricing(result, code);
})
test('pricingForCode should be calculate pricing by second case', () => {
    const code = generateCode.two()
    const result = pricingForCode(code)

    codePricing(result, code);
})
test('pricingForCode should be calculate pricing by third case', () => {
    const code = generateCode.three()
    const result = pricingForCode(code)

    codePricing(result, code);
})
